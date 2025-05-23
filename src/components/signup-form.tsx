import React from "react";

import { validatePassword } from "./utils/validatePassword";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SignupInputs from "./signupInputs";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const surnameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const { register } = useAuth();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const validation = validatePassword(newPassword);
    if (!validation.valid) {
      setError(validation.message || "Invalid password");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const surname = surnameRef.current?.value;
    const email = emailRef.current?.value;

    if (name && surname && email && password) {
      register(name, surname, email, password);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="py-16">
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>
            {" "}
            <span> Already registered? </span>
            <Link href="/login" className="font-bold">
              {" "}
              Login
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <SignupInputs
              nameRef={nameRef}
              surnameRef={surnameRef}
              emailRef={emailRef}
              password={password}
              error={error}
              onPasswordChange={handlePasswordChange}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
