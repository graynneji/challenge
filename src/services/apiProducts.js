import axios from "axios";

const BASE_URL =
  "http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet&first=0&last=50";

export async function getPatients() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data || [];
  } catch (error) {
    if (error.response) throw new Error(`Error occured ${error.message}`);
  }
}
