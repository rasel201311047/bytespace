import AuthForm from "@/src/components/auth/AuthForm";
import AuthShell from "@/src/components/auth/AuthShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account ",
  description: "Join ByteSpace ",
};

export default function page() {
  return (
    <AuthShell
      title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <AuthForm mode="register" />
    </AuthShell>
  );
}
