import axios from "axios";
export const guideService = {
  getGuidesByPermalink,
};

async function getGuidesByPermalink(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL_PANEL}/guide/${permalink}`
  );
}
