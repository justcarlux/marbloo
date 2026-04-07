import { Metadata } from "next";
import SignUpForm from "../components/ui/SignUpForm";

export const metadata: Metadata = {
    title: "Sign Up | Marbloo",
};

export default function LoginPage() {
    return <SignUpForm />;
}
