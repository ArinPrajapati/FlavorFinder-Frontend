import axios from "axios";

async function getRestuarants(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Handle errors here
    throw error;
  }
}

async function CreateRestuarantAccount(url: string, data: string) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    // Handle errors here
    throw error;
  }
}

export { getRestuarants, CreateRestuarantAccount };
