import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import * as schema from "@/db/schema";
import { sendResetPasswordEmail } from "@/emails/_lib/send-reset-password-email";
import { sendEmailVerify } from "@/emails/_lib/send-verification-email";

function checkEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not defined`);
  }
  return value;
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  emailAndPassword: {
    enabled: true,
    revokeSessionsOnPasswordReset: true,

    sendResetPassword: async ({ user, url }) => {
      void sendResetPasswordEmail({
        from: checkEnv("EMAIL_FROM"),
        to: user.email,
        name: user.name,
        url,
      });
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,

    sendVerificationEmail: async ({ user, url }) => {
      void sendEmailVerify({
        from: checkEnv("EMAIL_FROM"),
        to: user.email,
        name: user.name,
        url,
      });
    },
  },

  socialProviders: {
    google: {
      clientId: checkEnv("GOOGLE_CLIENT_ID"),
      clientSecret: checkEnv("GOOGLE_CLIENT_SECRET"),
    },

    github: {
      clientId: checkEnv("GITHUB_CLIENT_ID"),
      clientSecret: checkEnv("GITHUB_CLIENT_SECRET"),
    },
  },

  // If your application runs on a port other than 3000, add the appropriate URL to trustedOrigins.
  // trustedOrigins: ["http://localhost:3001"],
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
