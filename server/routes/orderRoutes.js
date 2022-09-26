const express = require("express");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51LlsxzSGIZRkWd6KCijfpCechBFcfrb8sC8Avnd6wCet0MY0xEYpK0Bk0HSSu6I1OeYlokiMRi27Zhd3qCVmM9lU00hYzOXgSY"
);
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const router = express.Router();

router.post("/plcaorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  console.log(token, "token");
  try {
    console.log(token,"^^^^^^^^^^");
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    
    const payment = await stripe.paymentIntents.create({
      amount:subtotal * 100,
      customer:customer.id,
      payment_method:token.card.id,
      confirm:true,
      currency: 'inr',
      description:"testing"
    });
    // const payment = await stripe.payment_method_types.create(
    //   {
    //     amount: subtotal * 100,
    //     description:"try",
    //     currency:"usd",
    //     customer: customer.id,
    //     receipt_email: token.email,
    //     payment_method_types: ['card'],
    //     // shipping: {
    //     //   name: "cs",
    //     //   address: { country: "india" },
    //     // },
    //   },
    //   {
    //     idempotencyKey: uuidv4(),
    //   }
    // );
    if (payment) {
      res.send("paymeny success");
    } else {
      res.send("payment failed");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
