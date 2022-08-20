const router = require("express").Router();
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);


router.post("/create-payment-intent", async (req, res) => {
  const { items, amount, customer } = req.body;
 try{
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
    id:paymentIntent.id
  });
 }catch(err){
  console.log(err) 
 }
});


// GET SECURED PUBLISH KEY FOR FRONTEND SIDE
router.get("/publish-key", async(req, res)=>{
  res.send(process.env.REACT_APP_PUBLISH_KEY)
})

module.exports = router;