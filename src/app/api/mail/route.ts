import {SentMailSchema} from "@/lib/formSchema/mail";
import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {Options} from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body using Zod schema
    const validationResult = SentMailSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({error: "Invalid input data"}, {status: 400});
    }

    const {from, title, message} = validationResult.data;

    // Check environment variables and handle errors if not provided
    const mailHost = process.env.MAIL_HOST;
    const mailPort = process.env.MAIL_PORT
      ? parseInt(process.env.MAIL_PORT)
      : 587;
    const mailUser = process.env.MAIL_EMAIL;
    const mailPass = process.env.MAIL_PASSWORD;

    if (!mailHost || !mailPort || !mailUser || !mailPass) {
      throw new Error("Missing email configuration in environment variables");
    }

    // Configure the nodemailer transport
    const transporter = nodemailer.createTransport({
      host: mailHost,
      port: mailPort,
      secure: mailPort === 465, // true for 465, false for other ports
      auth: {
        user: mailUser,
        pass: mailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Define the mail options
    const mailOptions: Options = {
      from: mailUser,
      to: mailUser,
      subject: title,
      html: `
<div>
  <div>
    <strong>From:</strong> ${from}
  </div>
  <div>
    <h2>${title}</h2>
    <p>${message}</p>
  </div>
  <div>
    This email was sent from your portfolio website.
  </div>
</div>
      `,
      sender: mailUser,
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
