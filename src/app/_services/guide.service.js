import axios from "axios";
export const guideService = {
  getGuidesByPermalink,
  getCategoryAttributes,
  getTopGuideCount,
  getAllguides
};

async function getGuidesByPermalink(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/guide/${permalink}`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }
  );
}

async function getCategoryAttributes(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/guide/1/${permalink}/attributes`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }
  );
}

async function getTopGuideCount(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/guide/top-guide-counts/${permalink}`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }
  );
}
async function getAllguides(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/guide/archive-page/${permalink}`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }
  );
}

