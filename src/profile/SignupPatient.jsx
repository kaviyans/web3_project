import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

function Signin() {
  return (
    <div className="max-h-1 min-h-screen flex items-center justify-center bg-black">
    <Card className="w-full max-w-sm bg-white p-2 rounded-3xl shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up as Patient</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
      <form>
            <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                id="email"
                type="text"
                placeholder="Username"
                required
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Mobile No.</Label>
                <Input
                id="email"
                type="text"
                placeholder="Mobile No."
                required
                />
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" placeholder="password" required />
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input id="password" type="password" placeholder="Confirm password" required />
            </div>
            <Button type="submit" className="w-full">
                Sign Up
            </Button>
            </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/login" className="underline">
            Log In
          </a>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default Signin;