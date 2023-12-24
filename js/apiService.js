import { API_URL } from "./config.js";

/**
 * Returnes data from the json file
 */
export const getData = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}