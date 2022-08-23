import StripeCheckoutForm from "./StripeCheckoutForm";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./App.css";
import { useSelector } from "react-redux";

let stripePromise;
export default function StripePay(formData) {
  const { cartItems, amountTotal } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const { addresses } = useSelector((state) => state.address);
  let formLength = Object.values(formData.formData).filter(
    (item) => item !== ""
  ).length;

  useEffect(() => {
    // GET THE SECURED PUBLISH KEY FROM THE BACKEND
    const getPublishKey = async () => {
      try {
        let { data } = await axios.get("/publish-key");
        stripePromise = loadStripe(`${data}`);
      } catch (err) {
        console.log(err);
      }
    };

    getPublishKey();
  }, []);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    const fetchData = async (customerDetails) => {
      try {
        // amount = amount total plus tax and delivery
        let res = await axios.post(
          "/create-payment-intent",
          {
            items: cartItems,
            amount: parseInt((amountTotal + 5 + 5.52).toFixed(2)),
            customer: customerDetails,
          },
          { headers: { "Content-Type": "application/json" } }
        );
        let data = await res.data;

        // For getting payment id after payment and redirecting
        localStorage.setItem("paymentID", data.id);
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    userInfo
      ? // IF ITS A LOGIN USER
        addresses.length > 0 &&
        // USE FIRST ADDRESS IF NO ADDRESS IS CHECKED
        fetchData((addresses.filter((address) => address.checked)[0]) || addresses[0])
      : // IF ITS NOT A USER
        formLength > 6 && fetchData(formData.formData);

    // eslint-disable-next-line
  }, [addresses, formLength > 7]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      ) : (
        // IF USER ADDRESS ISN'T LOADED OR FORM ISN'T FILLED
        <>
          {userInfo ? (
            <>
              {error ? (
                <>
                  <p className="text-dark-grayish-blue">{error}</p>
                </>
              ) : (
                <>
                  <p className="text-dark-grayish-blue">Please hold on...</p>
                </>
              )}
            </>
          ) : (
            <>
              <p className="text-dark-grayish-blue">
                Fill the form above to proceed with payment
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
}
