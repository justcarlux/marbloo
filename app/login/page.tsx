import { Metadata } from "next";
import SignInOrOutForm from "../components/ui/SignInOrOutForm";

export const metadata: Metadata = {
    title: "Marbloo",
};

export default function LoginPage() {
    return <SignInOrOutForm />;
}
