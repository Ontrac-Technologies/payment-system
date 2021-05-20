const axios = require('axios');
require('dotenv').config();

exports.initializePayment = async (req, res) => {
  const { email, amount } = req.body;
  const secretKey = `BEARER ${process.env.PAYSTACK_SK_KEY}`;
  const url = 'https://api.paystack.co/transaction/initialize';
  const headers = {
    authorization: secretKey
  };
  const paymentData = {
    email,
    amount: amount * 100,
    callback_url: 'http://localhost:3000/success'
  };
  try {
    const result = await axios.post(url, paymentData, { headers });
    res.send(result.data);
  } catch (err) {
    console.log(err);
  }
};

exports.verifyPayment = async (req, res) => {
  const { ref } = req.params;
  const secretKey = `BEARER ${process.env.PAYSTACK_SK_KEY}`;
  const url = `https://api.paystack.co/transaction/verify/${ref}`;
  const headers = {
    authorization: secretKey
  };
  try {
    const result = await axios.get(url, { headers });
    res.send(result.data);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.response.data);
  }
};
