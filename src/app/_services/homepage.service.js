import axios from "axios";
export const homePage = {
  favSlider,
  counterApi,
  navData,
  footerData
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
