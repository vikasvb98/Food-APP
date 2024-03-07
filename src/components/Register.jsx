import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterCard() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/signup", {
        email,
        fullname,
        password,
        location
      });

      const data = response.data;
      setRegisterMessage("User registration is successful");
      setEmail("");
      setFullname("");
      setPassword("");
      setLocation("");
      window.alert("User registration is successful");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setRegisterMessage("Registration failed. Please check your inputs and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardHeader variant="gradient" color="gray" className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">Register</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} size="lg" />
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" />
          <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" size="lg" />
          <Input label="Location" value={location} onChange={(e) => setLocation(e.target.value)} size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" fullWidth>Register</Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already a user?
            <Link to="/login">
              <Typography variant="small" color="blue-gray" className="ml-1 font-bold">Login</Typography>
            </Link>
          </Typography>
          {registerMessage && <Typography variant="small" className="text-center text-red-500 mt-2">{registerMessage}</Typography>}
        </CardFooter>
      </Card>
    </form>
  );
}

export default RegisterCard;
