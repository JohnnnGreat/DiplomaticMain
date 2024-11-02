"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import PagesHeader from "../shared/PageHeader";
import axios from "axios";
import { message } from "antd";
import { Loader2 } from "lucide-react";

// Define the validation schema using Zod
const contactSchema = z.object({
   name: z.string().min(1, "Name is required"),
   email: z.string().email("Invalid email address"),
   message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Define the type for form inputs based on the schema
type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactUs: React.FC = () => {
   const form = useForm<ContactFormInputs>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
         name: "",
         message: "",
         email: "",
      },
   });

   const [isLoading, setIsLoading] = useState(false);
   const onSubmit = async (data: any) => {
      setIsLoading(true);
      try {
         const response = await axios.post("/api/contact", data);
         console.log(response);
         message.success("Message Sent successfully!!!");
         form.reset();
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <>
         <PagesHeader>Contact Us</PagesHeader>
         <div className="container mx-auto my-10 px-4">
            <div className="flex justify-center">
               <div className="w-full max-w-md p-6 rounded-lg">
                  <Form {...form}>
                     <form
                        className="space-y-4 "
                        onSubmit={form.handleSubmit(onSubmit)}
                     >
                        <FormField
                           name="name"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel htmlFor="name">Name</FormLabel>
                                 <FormControl>
                                    <Input
                                       id="name"
                                       {...field}
                                       placeholder="Your Name"
                                       className="bg-white/10 "

                                       // className={`${errors.name ? "border-red-500" : "border-gray-300"}`}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           name="email"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel
                                    className="mt-6"
                                    htmlFor="email"
                                 >
                                    Email
                                 </FormLabel>
                                 <FormControl>
                                    <Input
                                       id="email"
                                       type="email"
                                       {...field}
                                       placeholder="Your Email"

                                       // className={`${errors.email ? "border-red-500" : "border-gray-300"}`}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           name="message"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel htmlFor="message">Message</FormLabel>
                                 <FormControl>
                                    <Textarea
                                       id="message"
                                       {...field}
                                       placeholder="Your Message"
                                       //  className={`${errors.message ? "border-red-500" : "border-gray-300"}`}
                                       rows={4}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <Button
                           type="submit"
                           className="w-full mt-4 py-6"
                           disabled={isLoading}
                        >
                           {isLoading ? <Loader2 className="animate-spin" /> : "Send Message"}
                        </Button>
                     </form>
                  </Form>
               </div>
            </div>
         </div>
      </>
   );
};

export default ContactUs;
