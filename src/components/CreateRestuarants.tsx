import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpSchema, signUpSchema } from "../lib/types";
import { CreateRestaurantAccount } from "../api/Apiconnet";
import RestaurantLogoInput from "../lib/utils/RestaurantLogoInput";
import StepProgressBar from "./StepProgressBar";
import Loading from "./Loading";

export default function CreateRestaurants() {
  const [error, setError] = useState<string | undefined>();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [restaurantLogo, setRestaurantLogo] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  const [percent, setpercent] = useState<number>(0);
  const handleLogoChange = (compressedImageData: string) => {
    setRestaurantLogo(compressedImageData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setpercent(percent + 50);
  };

  const onPrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setpercent(percent - 50);
  };

  const onSubmit = async (data: SignUpSchema) => {
    setloading(true);
    try {
      data.restaurant_logo = restaurantLogo;
      console.log(data);
      const result = await CreateRestaurantAccount(
        "http://localhost:3000/api/restaurant/",
        data
      );
      console.log(result);
      reset();
    } catch (error) {
      setError(error.message);
    }
    setloading(false);
  };

  return (
    // <>
    //   {loading ? (
    //     <Loading />
    //   ) : (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="">
        <StepProgressBar percent={percent} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="main_form h-[100dvh] flex justify-center items-center"
        >
          {currentStep === 1 && (
            <div className="flex flex-row w-[58rem] gap-1 form_box  bg-[#8daccc] h-[30rem] rounded-md overflow-hidden  ">
              <img src="/public/form1img.jpg" alt="" className="img_form" />

              <div className="flex flex-col  ml-10 w-[50rem] gap-0 relative inner_box ">
                <p className="text-[2rem] mb-4 mt-7 font-Slab title">
                  Resister Restaurant
                </p>
                <p className="sub-ti">Restaurant Name</p>
                <input
                  className="input_bar"
                  placeholder="Restaurant Name"
                  type="text"
                  {...register("restaurant_name")}
                />
                {errors.restaurant_name && (
                  <p className="text-red-600 text-[0.9rem]">{`${errors.restaurant_name.message}`}</p>
                )}

                <p className="sub-ti ">Restaurant Email</p>
                <input
                  className="input_bar"
                  type="email"
                  placeholder="Enter Email"
                  {...register("restaurant_email")}
                />
                {errors.restaurant_email && (
                  <p className="text-red-600 text-[0.9rem] m-0">{`${errors.restaurant_email.message}`}</p>
                )}
                <p className="sub-ti ">Password</p>
                <input
                  className="input_bar "
                  placeholder="Enter Password"
                  {...register("password")}
                  type="password"
                />
                {errors.password && (
                  <p className="text-red-600 text-[0.9rem] m-0">{`${errors.password.message}`}</p>
                )}
                <button className="button_cs" onClick={onNextStep}>
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="border flex flex-row w-[70rem] gap-9 form_box shadow-2xl bg-[#666f98] h-[30rem] ">
              <img src="/public/form2img.jpg" alt="" className="img_form" />
              <div className="flex flex-col p-4 text-black w-[50rem] relative inner_box  ">
                <div className="sub-ti">
                  <RestaurantLogoInput onLogoChange={handleLogoChange} />
                </div>
                <p className="sub-ti ">Restaurant Owner Name</p>
                <input
                  className="input_bar "
                  type="text"
                  placeholder="Restaurant Owner Name"
                  {...register("restaurant_owner_name")}
                />
                {errors.restaurant_owner_name && (
                  <p className="text-red-600 text-[0.9rem] m-0 ">{`${errors.restaurant_owner_name.message}`}</p>
                )}
                <p className="sub-ti ">Restaurant Location</p>
                <input
                  className="input_bar"
                  placeholder="Restaurant Location"
                  {...register("restaurant_location")}
                />
                {errors.restaurant_location && (
                  <p className="text-red-600 text-[0.9rem] m-0">{`${errors.restaurant_location.message}`}</p>
                )}
                <p className="sub-ti ">Restaurant Description</p>
                <textarea
                  className="input_bar"
                  placeholder="Restaurant Description"
                  {...register("restaurant_desc")}
                />
                {errors.restaurant_desc && (
                  <p className="text-red-600 text-[0.9rem] m-0">{`${errors.restaurant_desc.message}`}</p>
                )}
                <button
                  onClick={onPrevStep}
                  className="button_cs  scale-75 top-[24rem]  text-[1.3rem] left-0"
                >
                  Previous
                </button>
                <button
                  onClick={onNextStep}
                  className="button_cs scale-75 top-[24rem]"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="border flex flex-row w-[70rem] gap-9 form_box shadow-2xl bg-[#c3dbf2] h-[30rem]">
              <div className="absolute top-0 left-0 z-40 right-0">
                {loading && <Loading />}
              </div>
              <img src="/public/form3img.jpg" alt="" className="img_form" />
              <div className="flex flex-col  p-4 text-black w-[50rem] relative inner_box  ">
                <p className="sub-ti">Restaurant Type</p>
                <select className="input_bar " {...register("restaurant_type")}>
                  <option value="Other">Other</option>
                  <option value="French cuisine">French cuisine</option>
                  <option value="Japanese Cuisine">Japanese Cuisine</option>
                  <option value="Italian Cuisine">Italian Cuisine</option>
                  <option value="Greek Cuisine">Greek Cuisine</option>
                  <option value="Spanish Cuisine">Spanish Cuisine</option>
                  <option value="Lebanese Cuisine">Lebanese Cuisine</option>
                  <option value="Turkey Cuisine">Turkey Cuisine</option>
                  <option value="Thai Cuisine">Thai Cuisine</option>
                  <option value="Indian Cuisine">Indian Cuisine</option>
                  <option value="Mexican Cuisine">Mexican Cuisine</option>
                  <option value="American Cuisine">American Cuisine</option>
                </select>
                {errors.restaurant_type && (
                  <p className="text-red-600 text-[0.9rem] m-0">{`${errors.restaurant_type.message}`}</p>
                )}
                <p className="sub-ti">Restaurant Opeing Time</p>
                <input
                  className="input_bar "
                  placeholder="Restaurant Opening Time"
                  {...register("restaurant_op_time")}
                />
                {errors.restaurant_op_time && (
                  <p className="text-red-600 text-[0.9rem] m-0">{`${errors.restaurant_op_time.message}`}</p>
                )}
                <p className="sub-ti ">Restaurant Close Time</p>
                <input
                  className="input_bar "
                  placeholder="Restaurant Closing Time"
                  {...register("restaurant_cl_time")}
                />
                {errors.restaurant_cl_time && (
                  <p className="text-red-600 text-[0.9rem] m-0">{`${errors.restaurant_cl_time.message}`}</p>
                )}

                <button
                  className="button_cs  scale-75 top-[23rem]  text-[1.3rem] left-0"
                  onClick={onPrevStep}
                >
                  Previous
                </button>
                <button
                  className=" button_cs scale-75 top-[23rem]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <p>{error}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
