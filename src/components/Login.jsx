import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
   
 function LoginCard() {
    return (
        <div className="flex items-center justify-center h-screen">
        <Card className="w-96 m-5">
        <CardHeader
          variant="gradient"
          color="gray"
          className="m-5 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Log In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to = "/signup">
                <Typography
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                >
                Sign up
                </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
        </div>
      
    );
  }

  export default LoginCard