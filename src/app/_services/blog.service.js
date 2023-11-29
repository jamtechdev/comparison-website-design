import axios from "axios";
export const blogService = {
  getBlogByPermalink,
  getAuthorById,
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

async function getAuthorById(authorId) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/author/${authorId}`,
    config
  );
}
