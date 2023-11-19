import axios from "axios";
export const homePage = {
  favSlider,
};
// counter api
const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
  };
async function favSlider(data) {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/homepage`, config,data);
}
