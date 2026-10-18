import { Metadata } from "next";

import { SignUpForm } from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign up - Calendly",
  description:
    "Create a Calendly account to find your next job or hire top talent.",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
