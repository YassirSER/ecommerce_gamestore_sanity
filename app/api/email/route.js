import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/emailConfig";

export async function POST(req) {
  const body = await req.json();
  const { subject, fromEmail, html, toEmail } = body;
  try {
    await sendMail(subject, fromEmail, toEmail, html);
    return NextResponse.json({ status: 200, msg: "lessgoo" });
  } catch (err) {
    const errmsg = {
      error_code: "api_one",
      message: err.message,
    };
    return NextResponse.json(errmsg);
  }
}
