import React from "react";

const Section2 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Why should you partner with FlavorFinder?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Zomato enables you to get 60% more revenue, 10x new customers and
              boost your brand visibility by providing insights to improve your
              business.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center justify-center items-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  src="https://cdn3.iconfinder.com/data/icons/unigrid-phantom-science-vol-1/60/003_042_planet_earth_globe_world_worldwide_space_cosmos_science_solar_system-256.png"
                  alt=""
                />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1000+ cities
                </h2>
                <p className="leading-relaxed">in India</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  src="https://cdn0.iconfinder.com/data/icons/lifestyle-entertainment-vol-2/512/restaurant_cafe_building_deli-256.png"
                  alt=""
                />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  3 lakh+
                </h2>
                <p className="leading-relaxed">restaurant</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  src="https://cdn0.iconfinder.com/data/icons/work-from-home-18/512/FoodDelivery-food-delivery-meal-order-256.png"
                  alt=""
                />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  5.0 crore+
                </h2>
                <p className="leading-relaxed">Orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
