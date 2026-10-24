import { NextRequest, NextResponse } from "next/server";
import { careerSchema } from "@/lib/validations";
import { sendMail, careerEmailTemplate } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = careerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (process.env.SMTP_HOST) {
      await sendMail({
        to: process.env.CAREERS_EMAIL_TO || "hr@currentelectricals.ae",
        subject: `New Job Application: ${data.name} — ${data.position}`,
        html: careerEmailTemplate(data),
        replyTo: data.email,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
