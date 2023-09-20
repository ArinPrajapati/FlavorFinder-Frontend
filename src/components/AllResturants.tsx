import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { getRestuarants } from "../api/Apiconnet";
import Restaurant from "../models";
const AllResturants = () => {
  const [data, setData] = useState<Restaurant[]>([]);
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getRestuarants(
          "http://localhost:3000/api/restaurant/"
        );
        setData(result); // Update the state with the data
      } catch (error) {
        setError(error); // Handle and set the error state
      }
    }

    fetchData(); // Call the fetchData function
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Restaurant List</h1>
      <ul>
        {data.map((restaurant) => (
          <li className="m-3" key={restaurant._id}>
            <h2 className="text-[2rem]">{restaurant.restaurant_name}</h2>
            <p>Type: {restaurant.restaurant_type}</p>
            <p>Email: {restaurant.restaurant_email}</p>
            <p>Description: {restaurant.restaurant_desc}</p>
            <p>Owner: {restaurant.restaurant_owner_name}</p>
            <p>Opening Time: {restaurant.restaurant_op_time}</p>
            <p>Closing Time: {restaurant.restaurant_cl_time}</p>
            <p>Location: {restaurant.restaurant_location}</p>
            <p>Code :{restaurant.restaurant_code}</p>
            <img
              src={restaurant.restaurant_logo}
              alt={`${restaurant.restaurant_name} Logo`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllResturants;
