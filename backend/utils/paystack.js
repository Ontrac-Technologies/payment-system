const axios = require('axios');
require('dotenv').config();
const secretKey = `BEARER ${process.env.PAYSTACK_SK_KEY}`;

const paystack = async (request) => {
  const initializePayment = async (form) => {
    const secretKey = `BEARER ${process.env.PAYSTACK_SK_KEY}`;
    const url = 'https://api.paystack.co/transaction/initialize';
    const headers = { authorization: secretKey };
    const paymentData = {
      email: 'oluwalusijohn@gmail.com',
      amount: 50000
    };
    try {
      const result = await axios.post(url, paymentData, { headers });
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };

  const verifyPayment = async (ref) => {
    const url =
      'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref);
    const headers = { authorization: secretKey };
    try {
      const result = await axios.get(url, { headers });
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };
  return { initializePayment, verifyPayment };
};

module.exports = paystack;
