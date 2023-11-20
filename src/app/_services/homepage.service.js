import axios from "axios";
export const homePage = {
  favSlider,
  counterApi,
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
