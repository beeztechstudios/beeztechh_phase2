// app/api/submit-inquiry/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// --- 1. Configuration from .env ---

// Google Sheet Config (Accessed directly on the server)
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
// IMPORTANT: Replace literal '\n' with actual newline characters
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
  ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  : null;
const SHEET_SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];

// Nodemailer Config (for sending emails)
const SENDER_USER = process.env.SENDER_USER; // Your personal account (2020aadarshsoni@gmail.com)
const SENDER_PASS = process.env.SENDER_PASS;

const BEEZTECH_USER = process.env.BEEZTECH_USER; // Client-facing account (beeztech.studios@gmail.com)
const BEEZTECH_PASS = process.env.BEEZTECH_PASS;

const INTERNAL_RECIPIENT = process.env.INTERNAL_RECIPIENT; // beeztech.studios@gmail.com

// --- 2. Initialize Google Sheets Auth ---

let sheets: any = null;

const initializeSheets = async () => {
  if (sheets) return sheets; // Return initialized sheets object if it exists

  if (!SHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
    console.error(
      '❌ Google Sheet environment variables are missing. Sheet logging disabled.'
    );
    return null;
  }

  try {
    const auth = new google.auth.JWT({
      email: SERVICE_ACCOUNT_EMAIL,
      key: PRIVATE_KEY,
      scopes: SHEET_SCOPE,
    });

    const googleSheets = google.sheets({ version: 'v4', auth });
    console.log('✅ Google Sheets API service initialized with Service Account.');
    sheets = googleSheets; // Cache the sheets object
    return googleSheets;
  } catch (error: any) {
    console.error(
      '❌ Error connecting to Google Sheets API (JWT Auth Failed):',
      error.message
    );
    return null;
  }
};

// --- 3. Nodemailer Transporter Setup (Dual Transporters) ---

// Transporter 1: Used for sending the automated confirmation to the client (FROM Beeztech)
const clientTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: BEEZTECH_USER, pass: BEEZTECH_PASS },
});

// Transporter 2: Used for sending the internal notification email (FROM your SENDER_USER)
const internalTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: SENDER_USER, pass: SENDER_PASS },
});


// --- 4. Main POST Handler (Replaces app.post('/submit-inquiry', ...)) ---

export async function POST(req: NextRequest) {
  // Check critical Nodemailer setup before processing
  if (!SENDER_USER || !SENDER_PASS || !BEEZTECH_USER || !BEEZTECH_PASS) {
      console.error(
          '🚨 Nodemailer setup is incomplete. Check SENDER_USER/PASS and BEEZTECH_USER/PASS in .env.'
      );
      return NextResponse.json(
          { message: 'Server setup incomplete: Email credentials missing.' },
          { status: 503 }
      );
  }

  const submissionData = await req.json();
  const clientEmail = submissionData.client_info.email;
  const clientName = submissionData.client_info.name;
  const sheetName = 'Inquiries';

  console.log(
    `Received inquiry for ${submissionData.project_details.services.join(
      ', '
    )} from: ${clientEmail}`
  );

  try {
    let isSheetSuccess = false;
    const sheetsAPI = await initializeSheets();

    // --- A. Log to Google Sheet ---
    if (sheetsAPI) {
      try {
        const rowValues = [
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          clientName,
          submissionData.client_info.business_name || 'N/A',
          clientEmail,
          submissionData.client_info.phone,
          // Incorporate SEO Keywords for project types (e.g., pet services in Udaipur - if client was related to pets)
          submissionData.project_details.services.join(', '),
          submissionData.project_details.project_stage,
          submissionData.project_details.timeline,
          submissionData.project_details.budget,
          submissionData.call_preference.meeting_platform,
          submissionData.call_preference.preferred_time
            ? new Date(
                submissionData.call_preference.preferred_time
              ).toLocaleString()
            : 'ASAP',
          submissionData.call_preference.note,
        ];

        await sheetsAPI.spreadsheets.values.append({
          spreadsheetId: SHEET_ID,
          range: `${sheetName}!A:L`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [rowValues],
          },
        });

        console.log('✅ Data successfully added to Google Sheet.');
        isSheetSuccess = true;
      } catch (sheetError: any) {
        console.error('❌ Failed to write to Google Sheet:', sheetError.message);
      }
    } else {
      console.log('⚠️ Google Sheets API not initialized. Skipping sheet log.');
    }

    // --- B. Send Confirmation Email to Client (FROM BeezTech) ---
    const formatDetailRow = (label: string, value: string) => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: 600; color: #555; width: 30%;">${label}</td>
            <td style="padding: 10px 0; color: #333; width: 70%;">${value}</td>
        </tr>
    `;

    const clientMailOptions = {
      from: BEEZTECH_USER,
      to: clientEmail,
      subject: 'BeezTech: Your Consultation Call Inquiry Has Been Received!',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #ffffff;">
            
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px; border-bottom: 2px solid #FE7B50;">
                <tr>
                    <td style="padding-bottom: 10px;">
                        <img src="https://res.cloudinary.com/dy0zo3822/image/upload/v1759841419/Logo_Black_4x_pqwsbj.png" alt="Beeztech Logo" style="height: 40px; border: 0;">
                    </td>
                </tr>
            </table>

            <h1 style="color: #333; font-size: 24px; font-weight: 700; margin-top: 0;">
                Thank You, ${clientName}!
            </h1>
            
            <p style="font-size: 16px;">
                We've successfully received your inquiry for a consultation with <strong>BeezTech</strong> regarding <strong>${submissionData.project_details.services.join(
                  ' & '
                )}</strong>.
            </p>
            <p style="font-size: 16px; margin-bottom: 30px;">
                Our team is already reviewing your details. We will contact you within <strong>1 business day</strong> to confirm the call at your preferred time.
            </p>

            <div style="border: 1px solid #FE7B50; border-radius: 6px; padding: 20px; background-color: #fff9f6;">
                <h3 style="color: #FE7B50; font-size: 18px; margin-top: 0; border-bottom: 1px solid #FE7B50; padding-bottom: 10px;">
                    Inquiry Summary
                </h3>
                
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; border-collapse: collapse;">
                    ${formatDetailRow(
                      'Services',
                      submissionData.project_details.services.join(', ')
                    )}
                    ${formatDetailRow(
                      'Project Stage',
                      submissionData.project_details.project_stage
                    )}
                    ${formatDetailRow(
                      'Budget',
                      submissionData.project_details.budget
                    )}
                    ${formatDetailRow(
                      'Timeline',
                      submissionData.project_details.timeline
                    )}
                    ${formatDetailRow(
                      'Contact Platform',
                      submissionData.call_preference.meeting_platform
                    )}
                    ${formatDetailRow(
                      'Preferred Time',
                      submissionData.call_preference.preferred_time
                        ? new Date(
                            submissionData.call_preference.preferred_time
                          ).toLocaleString()
                        : 'ASAP'
                    )}
                </table>
            </div>

            <p style="margin-top: 30px; font-size: 15px;">
                We look forward to connecting and discussing how we can help your brand succeed!
            </p>
            <p style="font-size: 15px; margin-bottom: 0;">
                Best regards,<br>
                <strong style="color: #333;">The Beeztech Team</strong>
            </p>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #888;">
                <p>Beeztech  | <a href="https://www.beeztech.studio/" style="color: #FE7B50; text-decoration: none;">Visit Our Website</a></p>
            </div>
        </div>
      `,
    };

    await clientTransporter.sendMail(clientMailOptions);
    console.log('✅ Confirmation email sent to client (via BeezTech).');

    // --- C. Send Internal Notification Email (FROM Your Personal Account) ---
    const notificationMailOptions = {
      from: SENDER_USER, // SENDER: Your Personal Account
      to: INTERNAL_RECIPIENT, // RECIPIENT: Beeztech Account
      subject: `🚨 NEW INQUIRY: ${submissionData.project_details.services.join(
        ', '
      )} from ${clientName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #008080;">New Client Inquiry Received!</h2>
            <p>A new client has submitted an inquiry form on the website. Here are the details:</p>
            
            <h3 style="color: #008080; border-bottom: 2px solid #008080; padding-bottom: 5px;">Client Information:</h3>
            <ul style="list-style-type: none; padding: 0;">
                <li><strong>Name:</strong> ${clientName}</li>
                <li><strong>Email:</strong> ${clientEmail}</li>
                <li><strong>Phone:</strong> ${
                  submissionData.client_info.phone
                }</li>
                <li><strong>Business Name:</strong> ${
                  submissionData.client_info.business_name || 'N/A'
                }</li>
            </ul>

            <h3 style="color: #008080; border-bottom: 2px solid #008080; padding-bottom: 5px;">Project Details:</h3>
            <ul style="list-style-type: none; padding: 0;">
                <li><strong>Services Requested:</strong> ${submissionData.project_details.services.join(
                  ', '
                )}</li>
                <li><strong>Project Stage:</strong> ${
                  submissionData.project_details.project_stage
                }</li>
                <li><strong>Budget:</strong> ${
                  submissionData.project_details.budget
                }</li>
                <li><strong>Timeline:</strong> ${
                  submissionData.project_details.timeline
                }</li>
                <li><strong>Note:</strong> ${
                  submissionData.call_preference.note
                }</li>
            </ul>
            <p><strong>Preferred Call:</strong> ${
              submissionData.call_preference.meeting_platform
            } at ${
        submissionData.call_preference.preferred_time
          ? new Date(
              submissionData.call_preference.preferred_time
            ).toLocaleString()
          : 'ASAP'
      }</p>
            <p style="margin-top: 20px;">*This lead has been automatically logged to the Google Sheet (Status: ${
              isSheetSuccess ? 'Success' : 'Failed'
            }).</p>
        </div>
      `,
    };

    await internalTransporter.sendMail(notificationMailOptions);
    console.log('✅ Internal notification email sent (via SENDER_USER).');

    // --- D. Send Response to Frontend (Next.js format) ---
    return NextResponse.json(
      {
        message: 'Inquiry submitted successfully!',
        sheet_log: isSheetSuccess ? 'success' : 'failed',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Final Error during submission process:', error);
    return NextResponse.json(
      {
        message: 'An error occurred during submission. Please try again.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Optional: Add a GET handler to prevent 405 error if someone visits the API URL directly
export async function GET() {
  return NextResponse.json(
    { message: 'API Route for form submission. Please use POST.' },
    { status: 200 }
  );
}