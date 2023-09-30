import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../lib/types";
import { loginAsOwner } from "../api/Apiconnet";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginSchema) => {
    try {
      console.log(data);
      setError("");
      console.log(data);

      const result = await loginAsOwner(
        "http://localhost:3000/api/restaurant/login",
        data
      );
      console.log(result);
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="pruple_gra flex flex-col justify-center items-center h-[41.7rem]">
      <div className="flex flex-row h-[30.7rem] w-[80%] shadow-2xl">
        <img className="w-[60%] h-full " src="/public/pruple.jpg" alt="" />
        <div className="font-semibold flex flex-col justify-center items-center w-[40%] bg-white">
          <h1 className="mb-7">Hello, Welcome Back</h1>
          <form
            action=""
            className="flex flex-col w-[20rem] ml-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="rea" className="text-sm my-2">
              Restaurant Email
            </label>
            <input
              className="input_bar"
              id="rea"
              placeholder="Restaurant Email"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600 text-[0.9rem]">{`${errors.email.message}`}</p>
            )}
            <label htmlFor="pas" className="text-sm mt-10 my-2">
              Restaurant Password
            </label>
            <input
              id="pas"
              className="input_bar"
              placeholder="Restaurant Password"
              type="text"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600 text-[0.9rem]">{`${errors.password.message}`}</p>
            )}
            <button
              className=" border text-[1rem] text-white active:scale-90 w-[16rem] mt-10 bg-[#2a248e]"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
          <Link to="/res/signup" className="text-[1rem] my-6">
            Create Account?
          </Link>
        </div>
      </div>
      <p>{error}</p>
    </div>
  );
};

export default Login;
