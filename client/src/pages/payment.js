import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkout-form";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

const PaymentWrapper = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: #7f8fe6;
  padding: 20px;
  margin-top: 48px;
  border-radius: 8px;
  width: 70%;
  text-align: center;
`;

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/payment/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/api/payment/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <PaymentWrapper>
      <h1>Donation</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </PaymentWrapper>
  );
};

export default Payment;
