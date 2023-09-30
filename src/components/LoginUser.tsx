import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  useAccordion,
} from "@material-tailwind/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateUSer, UserLogin, createUSer, userLogin } from "../lib/types";
import { createUser, userlogin } from "../api/Apiconnet";
import { useState } from "react";
import { Link } from "react-router-dom";
userlogin;

function LoginUser() {
  const [error, setError] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<UserLogin>({
    resolver: zodResolver(userLogin),
  });

  const onSubmit = async (data: UserLogin) => {
    try {
      console.log(data);
      const result = await userlogin(
        "http://localhost:3000/api/user/login",
        data
      );
      console.log(result);
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-white bg-cover bg-no-repeat  h-full pt-10">
      <Card
        color="transparent"
        className=" bg-white backdrop-blur-md  bg-opacity-50 w-[30rem]  m-auto my-10 p-8  border-2 border-y-blue-500 border-x-black"
        shadow={true}
      >
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="black" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96  p-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              crossOrigin={undefined}
              size="lg"
              label="Email"
              {...register("email")}
              type="email"
            />
            {errors.email && (
              <p className="text-red-600 text-[0.9rem]">{`${errors.email.message}`}</p>
            )}
            <Input
              crossOrigin={undefined}
              type="password"
              size="lg"
              label="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600 text-[0.9rem]">{`${errors.password.message}`}</p>
            )}
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin={undefined}
          />
          <Button
            className="mt-6"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/user/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default LoginUser;
