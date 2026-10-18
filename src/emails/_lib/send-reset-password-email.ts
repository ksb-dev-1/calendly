"use server";

import ForgotPasswordEmail from "../_components/forgot-password";
import { resend } from "./resend";

type SendResetPasswordEmailParams = {
  from: string;
  to: string;
  url: string;
  name: string;
};

export async function sendResetPasswordEmail({
  from,
  to,
  name,
  url,
}: SendResetPasswordEmailParams) {
  await resend.emails.send({
    from,
    to,
    subject: "Reset Calendly account password",
    react: ForgotPasswordEmail({
      url,
      name,
    }),
  });
}
