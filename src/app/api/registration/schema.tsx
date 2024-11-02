import { z } from "zod";

export const formSchema = z.object({
   name: z.string().min(1),
   whatsapp: z.string().min(1),
   email: z.string().email(),
   gender: z.string().min(1),
   address: z.string().min(1),
   occupation: z.string().min(1),
   course: z.string().min(1),
   date: z.string(), // Date comes as string from frontend
   amountDeposited: z.number().positive().min(1),
   amountToComplete: z.number().positive().min(1),
   commencementDate: z.string(), // Date comes as string from frontend
   completionDate: z.string(), // Date comes as string from frontend
});
