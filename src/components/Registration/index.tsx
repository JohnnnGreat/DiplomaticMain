"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import PagesHeader from "../shared/PageHeader";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import axios from "axios";
import { message } from "antd";

const formSchema = z.object({
   name: z.string().min(1, "Name is required"),
   whatsapp: z.string().min(1, "WhatsApp No. is required"),
   email: z.string().email("Invalid email address"),
   gender: z.string().min(1, "Gender is required"),
   address: z.string().min(1, "Contact Address is required"),
   occupation: z.string().min(1, "Occupation is required"),
   course: z.string().min(1, "Preferred Course is required"),
   date: z.date({ required_error: "Date is required" }),
   amountDeposited: z.number().positive("Amount should be positive").min(1),
   amountToComplete: z.number().positive("Amount to complete should be positive").min(1),
   commencementDate: z.date({ required_error: "Commencement Date is required" }),
   completionDate: z.date({ required_error: "Completion Date is required" }),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm: React.FC = () => {
   const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         whatsapp: "",
         email: "",
         gender: "",
         address: "",
         occupation: "",
         course: "",
         date: undefined,
         amountDeposited: undefined,
         amountToComplete: undefined,
         commencementDate: undefined,
         completionDate: undefined,
      },
   });

   const onSubmit = async (data: FormData) => {
      console.log(data);
      try {
         const response = await axios.post("/api/registration", data);
         console.log(response);
         message.success("Registration successfully");
         form.reset();
      } catch (error) {
         message.error("An Error Occured");
         console.log(error);
      }
   };

   return (
      <>
         <PagesHeader>Registration</PagesHeader>
         <div className="max-w-[1000px] mx-auto">
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 p-4 md:p-8 bg-white rounded-lg shadow-md"
               >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter your name"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>WhatsApp No.</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter your WhatsApp number"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter your email address"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Gender</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter your gender"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                           <FormItem className="col-span-2">
                              <FormLabel>Contact Address</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter your contact address"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Occupation</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter your occupation"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Preferred Course</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter your preferred course"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Date</FormLabel>
                              <FormControl>
                                 <Popover>
                                    <PopoverTrigger asChild>
                                       <Button
                                          variant="outline"
                                          className={cn(
                                             "w-full justify-start text-left font-normal",
                                             !field.value && "text-muted-foreground",
                                          )}
                                       >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                       </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                       <Calendar
                                          mode="single"
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          initialFocus
                                       />
                                    </PopoverContent>
                                 </Popover>
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="amountDeposited"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Amount Deposited</FormLabel>
                              <FormControl>
                                 <Input
                                    type="number"
                                    placeholder="Enter amount deposited"
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="amountToComplete"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Amount to be Completed</FormLabel>
                              <FormControl>
                                 <Input
                                    type="number"
                                    placeholder="Enter amount to complete"
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="commencementDate"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Commencement Date</FormLabel>
                              <FormControl>
                                 <Popover>
                                    <PopoverTrigger asChild>
                                       <Button
                                          variant="outline"
                                          className={cn(
                                             "w-full justify-start text-left font-normal",
                                             !field.value && "text-muted-foreground",
                                          )}
                                       >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                       </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                       <Calendar
                                          mode="single"
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          initialFocus
                                       />
                                    </PopoverContent>
                                 </Popover>
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="completionDate"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Completion Date</FormLabel>
                              <FormControl>
                                 <Popover>
                                    <PopoverTrigger asChild>
                                       <Button
                                          variant="outline"
                                          className={cn(
                                             "w-full justify-start text-left font-normal",
                                             !field.value && "text-muted-foreground",
                                          )}
                                       >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                       </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                       <Calendar
                                          mode="single"
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          initialFocus
                                       />
                                    </PopoverContent>
                                 </Popover>
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>

                  <Button
                     type="submit"
                     className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4"
                  >
                     Register
                  </Button>
               </form>
            </Form>
         </div>
      </>
   );
};

export default RegistrationForm;
