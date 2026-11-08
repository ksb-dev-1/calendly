import { Metadata } from "next";

import { SignUpForm } from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign up - CodeCache",
  description:
    "Create a CodeCache account to find your next job or hire top talent.",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
