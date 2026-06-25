import twilio from "twilio";

export async function sendSms(to: string, body: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    console.error("Twilio credentials not fully configured.");
    return null;
  }

  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      to,
      from: fromNumber,
      body,
    });
    console.log("SMS sent successfully", message.sid);
    return message;
  } catch (error) {
    console.error("Error sending SMS via Twilio:", error);
    throw error;
  }
}
