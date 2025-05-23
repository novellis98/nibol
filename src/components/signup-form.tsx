"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { validatePassword } from "./utils/validatePassword";
import PasswordStrengthBar from "./passwordStrengthBar";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const surnameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  // funzione per validare la password
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // validazione della password
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
      // Handle signup logic here
      console.log("Signup successful", { name, surname, email, password });
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
            <div className="flex flex-col gap-6">
              <div className="grid gap-3 ">
                <Input
                  id="first_name"
                  type="text"
                  placeholder="Riccardo"
                  required
                  ref={nameRef}
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="last_name"
                  type="text"
                  placeholder="Suardi"
                  required
                  ref={surnameRef}
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="riccardo@nibol.com"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {/* barra errori password */}
                <PasswordStrengthBar password={password} error={error} />
              </div>
              <div className="flex items-start gap-2 text-sm">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-1 accent-orange-600 cursor-pointer "
                />
                <label htmlFor="terms" className=" cursor-pointer ">
                  Agree to our{" "}
                  <a
                    href="/terms"
                    className="underline underline-offset-4 hover:text-foreground  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  Create account
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
