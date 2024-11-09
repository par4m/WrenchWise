import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginButton() {
  return (
    <main className="bg-transparent flex flex-col items-center gap-6 text-4xl ">
      <Button asChild className="bg-transparent">
        <LoginLink>
          <LogInIcon className="bg-transparent w-5 h-5 text-amber-500" />
        </LoginLink>
      </Button>
    </main>
  );
}
