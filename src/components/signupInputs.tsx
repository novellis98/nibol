import React, { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import PasswordStrengthBar from "./passwordStrengthBar";
import { Button } from "@/components/ui/button";

interface SignupInputsProps {
  password: string;
  error: string;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignupInputs = forwardRef<
  HTMLInputElement,
  SignupInputsProps & {
    nameRef: React.Ref<HTMLInputElement>;
    surnameRef: React.Ref<HTMLInputElement>;
    emailRef: React.Ref<HTMLInputElement>;
  }
>(
  (
    { password, error, onPasswordChange, nameRef, surnameRef, emailRef },
    ref
  ) => {
    return (
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
            onChange={onPasswordChange}
          />
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
    );
  }
);

SignupInputs.displayName = "SignupInputs";

export default SignupInputs;
