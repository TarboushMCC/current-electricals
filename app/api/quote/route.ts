import { NextRequest, NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validations";
import { sendMail, quoteEmailTemplate } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (process.env.SMTP_HOST) {
      await sendMail({
        to: process.env.QUOTE_EMAIL_TO || "sales@currentelectricals.ae",
        subject: `New Quote Request: ${data.company} — ${data.projectType}`,
        html: quoteEmailTemplate(data),
        replyTo: data.email,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
