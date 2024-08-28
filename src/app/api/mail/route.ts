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
    const mailTo = process.env.MAIL_TO;

    if (!mailHost || !mailPort || !mailUser || !mailPass || !mailTo) {
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
      to: mailTo,
      subject: title,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #0073e6;
            padding: 10px;
            color: #ffffff;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            margin: 20px 0;
        }
        .content h2 {
            color: #333333;
            font-size: 24px;
            margin-bottom: 10px;
        }
        .content p {
            color: #555555;
            font-size: 16px;
            line-height: 1.5;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #999999;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${title}</h1>
        </div>
        <div class="content">
            <p><strong>From:</strong> ${from}</p>
            <h2>Message</h2>
            <p>${message}</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Sueksit Vachirakumthorn. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
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
