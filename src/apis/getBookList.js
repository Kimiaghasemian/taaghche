import { Fetch } from "./index";

export async function getBooksList() {
  try {
    const response = await Fetch.get();
    return response.data;
  } catch (error) {
    return error.message;
  }
}
