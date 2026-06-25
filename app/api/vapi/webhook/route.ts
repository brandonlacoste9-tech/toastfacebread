import { NextResponse } from "next/server";
import { sendSms } from "../../../../lib/twilio";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.message?.type === "end-of-call-report") {
      const summary = body.message.call?.summary || "No order summary generated.";
      const transcript = body.message.call?.transcript || "";
      const angiePhone = process.env.ANGIE_PHONE_NUMBER;
      
      const textBody = `🍞 New Bakery Order via AI Concierge:\n\n${summary}`;
      
      console.log("Processing end-of-call report:", textBody);
      
      if (angiePhone) {
        await sendSms(angiePhone, textBody);
      } else {
        console.warn("ANGIE_PHONE_NUMBER is not set, unable to send SMS.");
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing Vapi webhook:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
