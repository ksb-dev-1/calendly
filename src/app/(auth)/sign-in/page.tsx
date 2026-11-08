import { Metadata } from "next";

import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign In - CodeCache",
  description: "Sign in to your CodeCache account.",
};

export default function SignInPage() {
  return <SignInForm />;
}
