import axios from "axios";
export const productService = {
    getProducts ,
    getProductsTestPermalink
};
const config = {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
};
async function getProducts(data) {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}product`,
      data,
    );
  }


async function getProductsTestPermalink (){
  return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/test-permalink`,config);
}