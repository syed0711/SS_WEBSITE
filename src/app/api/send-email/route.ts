import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Debug: Print environment variables
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_APP_PASS:', process.env.GMAIL_APP_PASS ? '***' : undefined);
  console.log('RECEIVER:', process.env.RECEIVER);
  try {
    const body = await req.json();
    const { name, email, message, formType, ...rest } = body;
    const emailContent = `
      <h2>New ${formType || 'Form'} Submission</h2>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Message:</strong> ${message || 'N/A'}</p>
      ${
        Object.keys(rest).length
          ? `<pre>${JSON.stringify(rest, null, 2)}</pre>`
          : ''
      }
    `;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER,
      subject: `New ${formType || 'Form'} Submission from ${name || 'Unknown'}`,
      html: emailContent,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 