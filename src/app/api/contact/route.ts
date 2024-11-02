import { NextResponse } from "next/server";

export default async function POST(request: Request, response: Response) {
   try {
      const body = request.json();

      console.log(body);
      return NextResponse.json(
         {
            message: "Message Sent Successsfully",
         },
         { status: 200 },
      );
   } catch (error) {
      console.log(error);
   }
}
