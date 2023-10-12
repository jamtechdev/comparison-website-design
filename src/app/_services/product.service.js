import axios from "axios";
export const productService = {
    getProducts 
};

async function getProducts(data) {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}product`,
      data,
    );
  }