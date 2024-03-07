import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function 
LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/login", {
        email,
        password
      });

      const data = response.data;
      setLoginMessage("User login is successful");
      setEmail("");
      setPassword("");
      navigate("/")
    } catch (error) {
      console.error("Login failed:", error);
      setLoginMessage("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen">
      <Card className="w-96 m-5">
        <CardHeader variant="gradient" color="gray" className="m-5 grid h-28 place-items-center">
          <Typography variant="h3" color="white">Log In</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" />
          <Input type="password" name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} size="lg" />
          <Checkbox label="Remember Me" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" fullWidth>Log In</Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Link to="/signup">
              <Typography variant="small" color="blue-gray" className="ml-1 font-bold">Sign up</Typography>
            </Link>
          </Typography>
          {loginMessage && <Typography variant="small" className="text-center text-red-500 mt-2">{loginMessage}</Typography>}
        </CardFooter>
      </Card>
    </form>
  );
}

export default LoginCard;
