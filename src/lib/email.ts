import { Resend } from "resend";

const resendApiKey = "re_T5bM9Z3c_CaNHN7VytGCy8mtZyk5DQPoa";
const resend = new Resend(resendApiKey);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  try {
    const { name, email, subject, message } = data;

    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rabbihasan0113@gmail.com", // Your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
