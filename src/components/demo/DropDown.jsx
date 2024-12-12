"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom";

function DropDown() {
  const [position, setPosition] = React.useState("bottom");
  const navigate = useNavigate();
  const handleSignupRedirect = (role) => {
    if (role === "Doctor") {
      navigate("/signupd");
    } else if (role === "Patient") {
      navigate("/signupp");
    }
};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Sign Up</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-black w-56 bg-white/70 rounded-xl outline-none">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition} defaultValue="Doctor">
          <DropdownMenuRadioItem  onClick={() => handleSignupRedirect("Doctor")} value="Doctor">Doctor</DropdownMenuRadioItem>
          <DropdownMenuRadioItem  onClick={() => handleSignupRedirect("Patient")} value="Patient">Patient</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropDown;