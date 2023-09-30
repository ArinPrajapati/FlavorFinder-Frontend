import axios from "axios";
import {
  CreateUSer,
  LoginSchema,
  SignUpSchema,
  USerLogin,
  UserLogin,
} from "../lib/types";

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

async function loginAsOwner(url: string, data: LoginSchema) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function createUser(url: string, data: CreateUSer) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function userlogin(url: string, data: UserLogin) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export {
  getRestuarants,
  CreateRestaurantAccount,
  loginAsOwner,
  createUser,
  userlogin,
};
