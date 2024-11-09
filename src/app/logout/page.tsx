import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
      <h1>Repair Shop - Successfully Logged Out</h1>
      {/* <Button asChild> */}
      {/*   <LoginLink>Sign In</LoginLink> */}
      {/* </Button> */}
      <Button asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </main>
  );
}