import axios from "axios";
export const guideService = {
  getGuidesByPermalink,
  getCategoryAttributes,
};

async function getGuidesByPermalink(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL_PANEL}/guide/${permalink}`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }
  );
}

async function getCategoryAttributes(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL_PANEL}/guide/1/${permalink}/attributes`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }

  );
}


