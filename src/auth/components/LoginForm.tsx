import { LoginFormHeader } from "./LoginFormHeader"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export const LoginForm = () => {
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
                <form className="flex flex-col gap-6">
                    < LoginFormHeader title="Login to your account" description="Enter your email below to login to your account" />
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link to="/auth/login" className="ml-auto text-sm underline-offset-4 hover:underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" placeholder="Password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                    <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link to="/auth/login" className="underline underline-offset-4">
                            Sign up
                        </Link>
                    </div>
                </form >
            </div>
        </div>
    )
}