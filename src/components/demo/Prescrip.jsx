import { useState } from "react";
import { z } from "zod";
import { Button } from "../ui/button";
import { X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Tabletsearch from "./Tabletsearch";

function Prescrip() {
  const [errors, setErrors] = useState({});
  const [tablets, setTablets] = useState([{ tablet: "", count: "", times: [] }]);

  const loginSchema = z.object({
    username: z.string().nonempty("Username is required."),
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
  };

  const handleAddTablet = () => {
    setTablets([...tablets, { tablet: "", count: "", times: [] }]);
  };

  const handleTabletChange = (index, field, value) => {
    const newTablets = [...tablets];
    newTablets[index][field] = field === "times" ? value : value;
    setTablets(newTablets);
  };

  const handleRemoveTablet = (index) => {
    const newTablets = tablets.filter((_, i) => i !== index);
    setTablets(newTablets);
  };

  return (
    <Card className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">Prescription</CardTitle>
        <CardDescription>Enter patient details and prescription.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4 text-black">
            <div className="grid gap-2">
              <Label htmlFor="username">Patient Username</Label>
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
              <Label htmlFor="password">Password</Label>
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
            {tablets.map((tablet, index) => (
              <div key={index} className="grid gap-4 border-t pt-4 relative">
                <div className="absolute top-2 right-2 bg-red-200 rounded-2xl ">
                    <X
                      type="button"
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleRemoveTablet(index)}
                    />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                  <Label htmlFor={`tablet-${index}`}>Tablet Name</Label>
                    {/* 
                    <Input
                      id={`tablet-${index}`}
                      name={`tablet-${index}`}
                      type="text"
                      placeholder="Tablet Name"
                      value={tablet.tablet}
                      onChange={(e) =>
                        handleTabletChange(index, "tablet", e.target.value)
                      }
                    /> */}
                    <Tabletsearch />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor={`count-${index}`}>Count</Label>
                    <Input
                      id={`count-${index}`}
                      name={`count-${index}`}
                      type="number"
                      placeholder="Count"
                      value={tablet.count}
                      onChange={(e) =>
                        handleTabletChange(index, "count", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Label>Time of Day</Label>
                    <div className="flex gap-4">
                      {[
                        { label: "Morning", value: "morning" },
                        { label: "Afternoon", value: "afternoon" },
                        { label: "Night", value: "night" },
                      ].map((time) => (
                        <label key={time.value} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={time.value}
                            checked={tablet.times.includes(time.value)}
                            onChange={(e) => {
                              const newTimes = e.target.checked
                                ? [...tablet.times, time.value]
                                : tablet.times.filter((t) => t !== time.value);
                              handleTabletChange(index, "times", newTimes);
                            }}
                          />
                          {time.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button type="button" onClick={handleAddTablet} className="w-full">
              Add Another Tablet
            </Button>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default Prescrip;
