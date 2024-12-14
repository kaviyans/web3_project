import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import DropDown from "@/components/demo/DropDown";

function Login({ setIsLoggedIn , setRole}) {
  const navigate = useNavigate();

  // State for error messages
  const [errors, setErrors] = useState({});

  // Zod schema for validation
  const loginSchema = z.object({
    username: z.string().nonempty("Username is required."),
    role: z.enum(["doctor", "patient"], { required_error: "Role is required." }),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .nonempty("Password is required."),
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      role: formData.get("role"),
      password: formData.get("password"),
    };

    const validation = loginSchema.safeParse(data);

    if (!validation.success) {
      const errorMessages = validation.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(errorMessages);
      return;
    }

    setErrors({});
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", data.role);

    // Synchronize state immediately
    setRole(data.role);
    setIsLoggedIn(true);

    // Navigate based on role
    navigate(data.role === "doctor" ? "/dashboard" : "/dashboardpat");
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md">
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
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  className={errors.username ? "border-red-500" : ""}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="role">Role</Label>
                </div>
                <select
                  id="role"
                  name="role"
                  className={`bg-white border rounded-md p-2 ${
                    errors.role ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select Role</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account? <DropDown />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
