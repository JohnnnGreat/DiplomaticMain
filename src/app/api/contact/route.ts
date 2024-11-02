import nodemailer from "nodemailer";
import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
   try {
      const body = await request.json();

      // Send Message to Email Address

      await sendMessage(body);
      return NextResponse.json(
         {
            message: "Message Sent Successsfully",
         },
         { status: 200 },
      );
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "An error occurred" }, { status: 500 });
   }
}

export interface IMessage {
   name: string;
   email: string;
   message: string;
}
const sendMessage = async (body: IMessage) => {
   const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: "scholarhubbot@gmail.com",
         pass: "vqrrtrkcnmdicsht",
      },
   });

   const mailOptions = {
      from: "scholarhubbot@gmail.com",
      to: "johnossai20@gmail.com",
      subject: `Contact Form Submission: ${body.name}`,
      html: `
         <html>
            <head>
               <!-- Link the Raleway font from Google Fonts -->
               <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap" rel="stylesheet">
               <style>
               @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
                  body {
                     font-family: 'Raleway', sans-serif;
                     background-color: #f4f4f9;
                     color: #333;
                     padding: 20px;
                  }
                  .container {
                     max-width: 600px;
                     margin: 0 auto;
                     background-color: #ffffff;
                     border-radius: 8px;
                     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                     padding: 20px;
                     text-align: left;
                  }
                  h2 {
                     font-size: 24px;
                     font-weight: 600;
                     color: #0056b3;
                  }
                  p {
                     font-size: 16px;
                     line-height: 1.6;
                     margin: 8px 0;
                  }
                  .footer {
                     font-size: 14px;
                     color: #777;
                     margin-top: 20px;
                     text-align: center;
                  }
               </style>
            </head>
            <body>
               <div class="container">
                  <h2>New Contact Form Submission</h2>
                  <p><strong>Name:</strong> ${body.name}</p>
                  <p><strong>Email:</strong> ${body.email}</p>
                  <p><strong>Message:</strong></p>
                  <p>${body.message}</p>
                  <div class="footer">
                     <p>Sent from your website's contact form</p>
                  </div>
               </div>
            </body>
         </html>
      `,
   };

   try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
   } catch (error) {
      console.error("Error sending email:", error);
   }
};
