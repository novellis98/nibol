"use client";
import { SignupForm } from "@/components/signup-form";
import Spinner from "@/components/ui/spinner";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
  const { isLoading } = useAuth();
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      {isLoading ? (
        <div className="w-full max-w-sm h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      )}
    </div>
  );
}
