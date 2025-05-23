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
import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { toast } from "sonner";
import useLogin from "@/hooks/useLogin";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { login } = useAuth();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const { handleSubmit } = useLogin(login);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="py-16">
        <CardHeader className="">
          <CardTitle>Login</CardTitle>
          <CardDescription>
            {" "}
            <span> Dont't you have an account? </span>
            <Link href="/signup" className="font-bold">
              {" "}
              Signup
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              const email = emailRef.current?.value || "";
              const password = passwordRef.current?.value || "";
              handleSubmit(e, email, password);
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="riccardo@nibol.com"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="grid gap-3 ">
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  Continue
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <a href="#" className="font-bold">
                Forgot password?
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
