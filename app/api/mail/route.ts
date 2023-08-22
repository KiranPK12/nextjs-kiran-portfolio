import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  try {
    await resend.emails.send({
      from: "onboarding@resend.com",
      to: "kiranpadma2003@gmail.com",
      subject: "New Message from Portfolio contact forms",
      reply_to: body.email as string,
      text: body.message as string,
    });
  } catch (error: unknown) {
    alert("Smething went wrong. Try again later or Set mail using the Email Id manually")
    console.log(error);
  }
  return NextResponse.json({ message: "Details received" });
}
