import { Metadata } from "next";

import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign In - Calendly",
  description: "Sign in to your Calendly account.",
};

export default function SignInPage() {
  return <SignInForm />;
}
