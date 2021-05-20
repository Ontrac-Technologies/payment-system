import React, {useState} from 'react';
import axios from 'axios';
import {BASEURL} from '../utils/constants';

const userData = {
  name: 'John Jesutomi',
  email: 'oluwalusijohn@gmail.com',
  amount: 1000
}

const MakePayment = () => {
  const [hasPaymentLink, setHasPaymentLink] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);

  const initializePayment = async () => {
    try {
      const res = await axios.post(`${BASEURL}/initializePayment`, userData);
      const {data} = res.data;
      setHasPaymentLink(true);
      setPaymentLink(data.authorization_url)
      renderCompletePayment()
    } catch (err) {
      console.log(err);
    }
  }

  const renderCompletePayment = () => {
    return (
      <div>
        <div>Name: {userData.name}</div>
        <div>Email: {userData.email}</div>
        <div>Amount: {userData.amount}</div>
        <div>
          <a href={paymentLink}>Proceed to payment</a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>Payment Paystack</h2>
      {hasPaymentLink ? renderCompletePayment() : <button onClick={initializePayment}>Initialize Payment</button>}
    </div>
  );
};

export default MakePayment;
