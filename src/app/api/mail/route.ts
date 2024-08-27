import {SentMailSchema} from "@/lib/formSchema/mail";
import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body using Zod schema
    const validationResult = SentMailSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({error: "Invalid input data"}, {status: 400});
    }

    const {from, title, message} = validationResult.data;

    // Configure the nodemailer transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT!),
      secure: true,
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Define the mail options
    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: process.env.MAIL_EMAIL,
      subject: `New message from ${from}: ${title}`,
      text: `
You have received a new message from your portfolio website.

Sender: ${from}
Subject: ${title}

Message:
${message}
      `,
    };

    // Send the email and handle the promise
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({message: "Email sent successfully"});
  } catch (err) {
    // Log the error and return a 500 response
    console.error("Failed to send email:", err);
    return NextResponse.json({error: "Failed to send email"}, {status: 500});
  }
}
