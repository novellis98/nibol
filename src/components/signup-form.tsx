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
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3 ">
                <Input
                  id="first_name"
                  type="text"
                  placeholder="Riccardo"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="last_name"
                  type="text"
                  placeholder="Suardi"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="riccardo@nibol.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
                />
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
