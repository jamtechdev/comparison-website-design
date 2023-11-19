
import axios from "axios";
export const getterService = {
    getAboutUs,
    getPrivacyPolicy,
    getTermCondition,
    // getProduct,
    getFaq,
    
};

async function getAboutUs(data) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getters/about-us`,
      data,
    );
  }

  async function getPrivacyPolicy(data) {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}getters/privacy-policy`,
    data,
    );
  }

  async function getTermCondition(data) {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}getters/terms-and-condition`,
    data,
    );
  }

  async function getFaq(data) {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}getters/faq`,
    data,
    );
  }