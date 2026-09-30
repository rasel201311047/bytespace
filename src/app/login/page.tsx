import AuthForm from "@/src/components/auth/AuthForm";
import AuthShell from "@/src/components/auth/AuthShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In – ByteSpace",
  description: "Sign in to your ByteSpace ",
};
export default function page() {
  return (
    <AuthShell
      title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
