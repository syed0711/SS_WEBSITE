import { NextRequest } from 'next/server';
import { POST } from '../src/app/api/send-email/route';
import nodemailer from 'nodemailer';

declare const global: any;

jest.mock('nodemailer');

const mockSendMail = jest.fn().mockResolvedValue({});
(nodemailer as any).createTransport = jest.fn().mockReturnValue({ sendMail: mockSendMail });

describe('send-email API', () => {
  beforeAll(() => {
    process.env.GMAIL_USER = 'test@example.com';
    process.env.GMAIL_APP_PASS = 'password';
    process.env.RECEIVER = 'receiver@example.com';
  });

  it('responds with success true', async () => {
    const body = {
      name: 'Test User',
      email: 'user@example.com',
      message: 'Hello',
      formType: 'Contact',
    };
    const req = new NextRequest('http://localhost/api/send-email', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    const data = await res.json();

    expect(mockSendMail).toHaveBeenCalled();
    expect(data).toEqual({ success: true });
  });
});

