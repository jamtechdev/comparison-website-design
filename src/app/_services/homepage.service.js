import axios from "axios";
export const homePage = {
  favSlider,
  counterApi,
  navData,
  footerData,
  manageLogoFavicon,
  searchFilter,
  getAllSearchedProducts,
  getAllSearchedProductsByCategory
};
// api headers
const config = {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
};

// counter api
async function counterApi(data) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/homepage/counts`,
    config,
    data
  );
}

// favSlider
async function favSlider(data) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/homepage`,
    config,
    data
  );
}

async function navData() {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/menu/header`,
    config
  );
}
async function footerData() {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/menu/footer`,
    config
  );
}
async function manageLogoFavicon() {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/app-logo`,
    config
  );
}

// search start https://panel.mondopedia.it/api/v1/

async function searchFilter(query) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search?query=${query}`,
    config
  );
}

async function getAllSearchedProducts(query) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/product/compare/products?query=${query}`,
    config
  );
}

async function getAllSearchedProductsByCategory( catId, query) {
  console.log(catId, "catId", query, "query");
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/product/compare/products/${catId}?query=${query}`,
    config
  );
}
