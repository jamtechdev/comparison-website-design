import axios from "axios";
export const guideService = {
  getGuidesByPermalink,
  getCategoryAttributes,
};

async function getGuidesByPermalink(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL_PANEL}/guide/${permalink}`
  );
}

async function getCategoryAttributes(categoryId,permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL_PANEL}/guide/${categoryId}/${permalink}/attributes`
  );
}