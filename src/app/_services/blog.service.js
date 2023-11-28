import axios from "axios";
export const blogService = {
  getBlogByPermalink,
};
const config = {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
};

async function getBlogByPermalink(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${permalink}`,
    config
  );
}
