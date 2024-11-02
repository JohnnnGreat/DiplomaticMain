import Registration, { IRegistration } from "@/models/Registration";
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { formSchema } from "./schema";
import connectDB from "@/lib/mongodb";

export async function POST(request: Request, res: Response) {
   await connectDB();
   try {
      // Get the request body
      const body = await request.json();

      // Validate the request body
      const validatedData = formSchema.parse(body);
      console.log(body);
      const registrationData: IRegistration = new Registration(body);
      const savedData = await registrationData.save();

      // Call the function to send the email
      await sendRegistrationEmail(savedData);

      // For now, we'll just return the validated data
      return NextResponse.json(
         {
            message: "Registration successful",
            data: validatedData,
         },
         { status: 201 },
      );
   } catch (error) {
      if (error instanceof z.ZodError) {
         return NextResponse.json(
            {
               message: "Validation failed",
               errors: error.errors,
            },
            { status: 400 },
         );
      }
      console.log(error);
      return NextResponse.json(
         {
            message: "Internal server error",
         },
         { status: 500 },
      );
   }
}

// Function to send a registration confirmation email
async function sendRegistrationEmail(userData: IRegistration) {
   // Set up Nodemailer transporter with your email provider's SMTP settings
   const transporter = nodemailer.createTransport({
      service: "Gmail", // e.g., Gmail, Outlook, etc.
      auth: {
         user: "scholarhubbot@gmail.com", // Your email address
         pass: "vqrrtrkcnmdicsht", // Your email password or app-specific password
      },
   });

   // Email HTML content with a modern look
   const emailHTML = `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4A90E2; text-align: center;">Welcome to Our Platform, ${userData.name}!</h2>
      <p style="text-align: center; font-size: 1.1em;">
        Thank you for registering! Here are your registration details:
      </p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #4A90E2; margin: 0 0 10px;">Registration Details</h3>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Date:</strong> ${new Date(userData.createdAt).toLocaleDateString()}</p>
      </div>
      <p style="text-align: center;">
        <a href="${
           process.env.APP_URL
        }" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #4A90E2; border-radius: 5px; text-decoration: none; font-weight: bold;">
          Visit Your Dashboard
        </a>
      </p>
      <p style="text-align: center; color: #999; font-size: 0.9em;">
        If you have any questions, please contact our support team.
      </p>
      <hr style="border: none; height: 1px; background: #eaeaea; margin: 20px 0;" />
      <footer style="text-align: center; font-size: 0.8em; color: #aaa;">
        © ${new Date().getFullYear()} Our Platform. All rights reserved.
      </footer>
    </div>
  `;

   // Send the email
   await transporter.sendMail({
      from: `"Our Platform" <${process.env.EMAIL_USER}>`,
      to: userData.email,
      subject: "Welcome to Our Platform!",
      html: emailHTML,
   });
}
