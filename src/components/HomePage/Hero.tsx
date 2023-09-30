import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="textRedGreen title-font sm:text-4xl text-3xl mb-4 font-medium ">
            FlavorFinder:
            <br />
            Your Flavorful Journey Begins Here
          </h1>
          <p className="mb-8 leading-relaxed">
            Satisfy Your Cravings with a World of Culinary Choices at Your
            Fingertips Explore, Order, and Indulge in Gourmet Delights,
            Delivered to Your Doorstep
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Restaurants
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Types
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/public/heroImg.avif"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
