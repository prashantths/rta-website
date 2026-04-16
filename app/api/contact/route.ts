import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, growth, message, terms } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "prashantth.s@gmail.com";
    const fromEmail = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "website@resiliencetalentadvisory.com";

    await transporter.sendMail({
      from: `"RTA Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` at ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A2424; border-bottom: 2px solid #E9A832; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #2E7D7B;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #2E7D7B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #2E7D7B;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #2E7D7B;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            ${service ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #2E7D7B;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
            ${growth ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #2E7D7B;">Growth stage</td><td style="padding: 8px 0;">${growth}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-left: 3px solid #E9A832; border-radius: 2px;">
            <p style="font-weight: bold; color: #2E7D7B; margin: 0 0 8px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            Submitted via resiliencetalentadvisory.com · ${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })} ET
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact route] error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
