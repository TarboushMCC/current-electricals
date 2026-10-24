import nodemailer from "nodemailer";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

interface MailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail({ to, subject, html, replyTo }: MailOptions) {
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"CurrentElectricals" <${process.env.SMTP_FROM}>`,
    to,
    subject,
    html,
    replyTo: replyTo || process.env.SMTP_REPLY_TO,
  });
}

export function contactEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"><title>New Contact Inquiry</title></head>
    <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden;">
        <div style="background: #050B18; padding: 24px 32px;">
          <h1 style="color: #0066FF; margin: 0; font-size: 22px;">CurrentElectricals</h1>
          <p style="color: #94A3B8; margin: 4px 0 0;">New Contact Inquiry</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name:</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone:</td><td style="padding: 8px 0;">${data.phone}</td></tr>
            ${data.company ? `<tr><td style="padding: 8px 0; color: #666;">Company:</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Subject:</td><td style="padding: 8px 0;">${data.subject}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #0066FF;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
        <div style="background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #94A3B8;">
          <p style="margin: 0;">This email was sent from the CurrentElectricals website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function quoteEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  services: string[];
  location: string;
  timeline: string;
  budget?: string;
  description: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"><title>New Quote Request</title></head>
    <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden;">
        <div style="background: #050B18; padding: 24px 32px;">
          <h1 style="color: #0066FF; margin: 0; font-size: 22px;">CurrentElectricals</h1>
          <p style="color: #94A3B8; margin: 4px 0 0;">New Quotation Request</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 130px;">Contact:</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone:</td><td style="padding: 8px 0;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Company:</td><td style="padding: 8px 0;">${data.company}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Project Type:</td><td style="padding: 8px 0;">${data.projectType}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Location:</td><td style="padding: 8px 0;">${data.location}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Timeline:</td><td style="padding: 8px 0;">${data.timeline}</td></tr>
            ${data.budget ? `<tr><td style="padding: 8px 0; color: #666;">Budget:</td><td style="padding: 8px 0;">${data.budget}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px;">
            <p style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Services Required</p>
            <ul style="margin: 0; padding-left: 20px;">${data.services.map((s) => `<li style="padding: 2px 0;">${s}</li>`).join("")}</ul>
          </div>
          <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #0066FF;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Project Description</p>
            <p style="margin: 0; line-height: 1.6;">${data.description.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function careerEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  coverLetter: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"><title>New Career Application</title></head>
    <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden;">
        <div style="background: #050B18; padding: 24px 32px;">
          <h1 style="color: #0066FF; margin: 0; font-size: 22px;">CurrentElectricals</h1>
          <p style="color: #94A3B8; margin: 4px 0 0;">New Job Application</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 130px;">Applicant:</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone:</td><td style="padding: 8px 0;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Position:</td><td style="padding: 8px 0; font-weight: 600; color: #0066FF;">${data.position}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Experience:</td><td style="padding: 8px 0;">${data.experience}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Education:</td><td style="padding: 8px 0;">${data.education}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #0066FF;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Cover Letter</p>
            <p style="margin: 0; line-height: 1.6;">${data.coverLetter.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
