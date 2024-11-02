// models/Registration.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IRegistration extends Document {
   name: string;
   whatsapp: string;
   email: string;
   gender: string;
   address: string;
   occupation: string;
   course: string;
   date: Date;
   amountDeposited: number;
   amountToComplete: number;
   commencementDate: Date;
   completionDate: Date;
   createdAt: Date;
}

const RegistrationSchema: Schema = new Schema(
   {
      name: { type: String, required: true },
      whatsapp: { type: String, required: true },
      email: { type: String, required: true },
      gender: { type: String, required: true },
      address: { type: String, required: true },
      occupation: { type: String, required: true },
      course: { type: String, required: true },
      date: { type: Date, required: true },
      amountDeposited: { type: Number, required: true },
      amountToComplete: { type: Number, required: true },
      commencementDate: { type: Date, required: true },
      completionDate: { type: Date, required: true },
   },
   {
      timestamps: true,
   },
);

const Registration: Model<IRegistration> =
   mongoose.models.Registration || mongoose.model<IRegistration>("Registration", RegistrationSchema);

export default Registration;
