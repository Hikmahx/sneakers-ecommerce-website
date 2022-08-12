// import React from "react";
// import StripeCheckout from "react-stripe-checkout";
// import logo from "../assets/logo.svg";

// const PUBLISH_KEY = "pk_test_51L3oS1Lj3Xad5MDbuwibR39eqyYgzLhlqDTjsHf78IheGc2LII7oebuvQuvgHk67XQ2ls1exBh8SS0eYvsG9Z2Cp00XoA82Y8t"

// export default class TakeMoney extends React.Component {
//   onToken = (token) => {
//     fetch("/save-stripe-token", {
//       method: "POST",
//       body: JSON.stringify(token),
//     }).then((response) => {
//       response.json().then((data) => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   };

//   // ...

//   render() {
//     return (
//       // ...
//       <StripeCheckout
//         token={this.onToken}
//         // stripeKey="my_PUBLISHABLE_stripekey"
//         name="Sneakers Company"
//         image={logo}
//         shippingAddress
//         billingAddress
//         description="Your total is $20 for now___"
//         amount={2000} //$20
//         // token={onToken}
//         // stripeKey={process.env.PUBLISH_KEY}
//         stripeKey={PUBLISH_KEY}
//       />
//     );
//   }
// }

// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import StripeCheckoutForm from "./StripeCheckoutForm";
// // import "./App.css";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// // const stripePromise = loadStripe("pk_test_51L3oS1Lj3Xad5MDbuwibR39eqyYgzLhlqDTjsHf78IheGc2LII7oebuvQuvgHk67XQ2ls1exBh8SS0eYvsG9Z2Cp00XoA82Y8t");
// const stripePromise = loadStripe(process.env.PUBLISH_KEY);

// export default function Pay() {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="pay component">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <StripeCheckoutForm />

//         </Elements>
//       )}
//     </div>
//   );
// }

// import StripeCheckoutForm from "./StripeCheckoutForm";
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51L3oS1Lj3Xad5MDbuwibR39eqyYgzLhlqDTjsHf78IheGc2LII7oebuvQuvgHk67XQ2ls1exBh8SS0eYvsG9Z2Cp00XoA82Y8t');

// function Pay() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: '{{CLIENT_SECRET}}',
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <StripeCheckoutForm />
//     </Elements>
//   );
// };
// export default Pay

import StripeCheckoutForm from "./StripeCheckoutForm";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

// import CheckoutForm from "./CheckoutForm";
import "./App.css";
import { useSelector } from "react-redux";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51L3oS1Lj3Xad5MDbuwibR39eqyYgzLhlqDTjsHf78IheGc2LII7oebuvQuvgHk67XQ2ls1exBh8SS0eYvsG9Z2Cp00XoA82Y8t"
);

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
    // Create PaymentIntent as soon as the page loads

    const fetchData = async (customerDetails) => {
      try {
        // amount = amount total plus tax and delivery
        let res = await axios.post(
          "/create-payment-intent",
          {
            items: cartItems,
            amount: (amountTotal + 5 + 5.52).toFixed(2),
            customer: customerDetails,
          },
          { headers: { "Content-Type": "application/json" } }
        );
        let data = await res.data;
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    userInfo
      ? // IF ITS A LOGIN USER
        addresses.length > 0 &&
        fetchData(addresses.filter((address) => address.checked)[0])
      : // IF ITS NOT A USER
        formLength > 6 && fetchData(formData.formData);

    // console.log(customer);
    // console.log(Object.keys(formData.formData).length)
    console.log(formLength);

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
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
}
