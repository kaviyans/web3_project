import { useNavigate } from "react-router-dom";
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
import DropDown from "@/components/demo/DropDown";

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        navigate("/dashboard");
    };
    
    

  return (
    <Card className="mx-auto max-w-xs mt-[100px]">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>

        <form onSubmit={handleLogin}>
            <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                id="email"
                type="text" 
                placeholder="Username"
                required
                />
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                <Label htmlFor="Role">Role</Label>
                </div>
                <select
                    id="role"
                    className="bg-neutral-600 border rounded-md p-2"
                    required
                >
                    <option value="">Select Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" placeholder="Password" required />
            </div>
            <Button type="submit" className="w-full">
                Login
            </Button>
            </div>
        </form>
        
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <DropDown />
        </div>
      </CardContent>
    </Card>
  )
}

export default Login;
