"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from "lucide-react";

const formSchema = z.object({
   email: z.string().min(1, "Email is required").email("Invalid email address"),
   password: z.string().min(8, "Password must be at least 8 characters"),

   rememberMe: z.boolean().default(false),
});

const LoginPage = () => {
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
         rememberMe: false,
      },
   });

   const onSubmit = async (values: any) => {
      form.setError("root", {
         type: "manual",
         message: "Invalid credentials",
      });
      try {
         console.log(values);
         // Add your authentication logic here
      } catch (error) {
         form.setError("root", {
            type: "manual",
            message: "Invalid credentials",
         });
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br  0 flex items-center justify-center p-4">
         <div className="w-full max-w-md backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
            <div className="mb-8 text-center">
               <h2 className="text-2xl font-bold tracking-tight text-black mb-2">Welcome back</h2>
               <p className="text-[#1b1b1b]">Enter your credentials to access your account</p>
            </div>

            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
               >
                  {form.formState.errors.root && (
                     <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 flex items-center gap-2 text-sm text-red-200">
                        <AlertCircle className="h-4 w-4" />
                        <span>{form.formState.errors.root.message}</span>
                     </div>
                  )}

                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="text-[#242424]">Email</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="email"
                                 placeholder="name@example.com"
                                 className="bg-white/10 border-white/20   "
                              />
                           </FormControl>
                           <FormMessage className="text-red-300" />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="password"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="text-[#242424]">Password</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type="password"
                                 placeholder="••••••••"
                                 className="bg-white/10 "
                              />
                           </FormControl>
                           <FormMessage className="text-red-300" />
                        </FormItem>
                     )}
                  />

                  {/* <div className="flex items-center justify-between">
                     <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                           <div className="flex items-center space-x-2">
                              <Checkbox
                                 id="rememberMe"
                                 checked={field.value}
                                 onCheckedChange={field.onChange}
                                 className="border-white/20 data-[state=checked]:bg-red-500"
                              />
                              <label
                                 htmlFor="rememberMe"
                                 className="text-sm text-gray-200 cursor-pointer"
                              >
                                 Remember me
                              </label>
                           </div>
                        )}
                     />
                     <button
                        type="button"
                        className="text-sm text-red-300 hover:text-red-200 transition-colors"
                     >
                        Forgot password?
                     </button>
                  </div> */}

                  <Button
                     type="submit"
                     className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
                     disabled={form.formState.isSubmitting}
                  >
                     {form.formState.isSubmitting ? (
                        <div className="flex items-center gap-2">
                           <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                           Signing in...
                        </div>
                     ) : (
                        "Sign in"
                     )}
                  </Button>

                  {/* <div className="relative my-6">
                     <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/20" />
                     </div>
                     <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-transparent text-gray-200">Or continue with</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <Button
                        type="button"
                        variant="outline"
                        className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
                     >
                        <svg
                           className="w-5 h-5 mr-2"
                           viewBox="0 0 24 24"
                        >
                           <path
                              fill="currentColor"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                           />
                           <path
                              fill="currentColor"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                           />
                           <path
                              fill="currentColor"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                           />
                           <path
                              fill="currentColor"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                           />
                        </svg>
                        Google
                     </Button>
                     <Button
                        type="button"
                        variant="outline"
                        className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
                     >
                        <svg
                           className="w-5 h-5 mr-2"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.18.69.795.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                        </svg>
                        GitHub
                     </Button>
                  </div> */}

                  <p className="text-center text-sm text-[#000]">
                     Don't have an account?{" "}
                     <button
                        type="button"
                        className="transition-colors"
                     >
                        Sign up
                     </button>
                  </p>
               </form>
            </Form>
         </div>
      </div>
   );
};

export default LoginPage;
