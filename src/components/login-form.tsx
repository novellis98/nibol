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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="riccardo@nibol.com"
                  required
                />
              </div>
              <div className="grid gap-3 ">
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
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
