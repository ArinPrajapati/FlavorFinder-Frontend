import axios from "axios";
import { SignUpSchema } from "../lib/types";

async function getRestuarants(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function CreateRestaurantAccount(url: string, data: SignUpSchema) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function loginAsOwner(url: string, data: string) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getRestuarants, CreateRestaurantAccount, loginAsOwner };
