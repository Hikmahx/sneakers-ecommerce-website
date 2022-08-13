const router = require("express").Router();
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
  const { items, amount, customer } = req.body;

  // ORDER SUMMARY
  let orderSummary = () => {
    return (
      `${customer.firstname} ${customer.lastname} ordered:` +
      items.map(item => (
        `\n${item.product.title} X ${item.quantity}`)
      ).join(', ')
    )
  }
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount: amount * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      description: orderSummary(),
      shipping: {
        address: {
          city: customer?.city,
          state: customer?.state,
          country: customer?.country,
          line1: customer?.streetAddress,
          postal_code: customer?.zipcode,
        },
        name: `${customer?.firstname}  ${customer?.lastname}`,
        phone: customer?.phone,
      },
      receipt_email: customer.email,
    }
  );

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

});


// GET SECURED PUBLISH KEY FOR FRONTEND SIDE
router.get("/publish-key", async(req, res)=>{
  res.send(process.env.REACT_APP_PUBLISH_KEY)
})

module.exports = router;