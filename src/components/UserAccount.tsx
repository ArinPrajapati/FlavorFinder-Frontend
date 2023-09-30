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
import { CreateUSer, createUSer } from "../lib/types";
import { createUser } from "../api/Apiconnet";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserAccount() {
  const [error, setError] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<CreateUSer>({
    resolver: zodResolver(createUSer),
  });

  const onSubmit = async (data: CreateUSer) => {
    try {
      console.log(data);
      const result = await createUser(
        "http://localhost:3000/api/user/createUser",
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
        className="backdrop-blur-md bg-black w-[30rem] bg-opacity-5 m-auto my-11 p-8  border-2 border-y-blue-500 border-x-black"
        shadow={true}
      >
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="black" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96  p-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              crossOrigin={undefined}
              size="lg"
              label="Name"
              type="text"
              {...register("user_name")}
            />
            {errors.user_name && (
              <p className="text-red-600 text-[0.9rem]">{`${errors.user_name.message}`}</p>
            )}
            <Input
              crossOrigin={undefined}
              size="lg"
              label="Email"
              {...register("user_email")}
              type="email"
            />
            {errors.user_email && (
              <p className="text-red-600 text-[0.9rem]">{`${errors.user_email.message}`}</p>
            )}
            <Input
              crossOrigin={undefined}
              type="password"
              size="lg"
              label="Password"
              {...register("user_password")}
            />
            {errors.user_password && (
              <p className="text-red-600 text-[0.9rem]">{`${errors.user_password.message}`}</p>
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
            Already have an account?{" "}
            <Link to="/user/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default UserAccount;
