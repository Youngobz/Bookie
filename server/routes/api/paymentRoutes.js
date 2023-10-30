const express = require("express");

const router = express.Router();

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Hn03nJLmQQgCJhaDB4aoavTcAZoXGUTlXSibvyIsUdfTNG23aa0DnXDphbxdXey4pT1uV0G4JugMBJxuvGKdmt4009E6jYZhI');

router.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "AUD",
      amount: 100,
      payment_method_types: ['card'], // Specify the payment method types here
      // automatic_payment_methods: { enabled: true }, // You can remove this if you are specifying payment method types
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});


router.get("/config", (req, res) => {
  res.send({
    publishableKey:
      "pk_test_51Hn03nJLmQQgCJhaV01ZWSKuztr7E1K8ghlarggcsmTY1qTTFULzYuMIKr33RQggmcENLXmxH1toFw3TWaQtFjsA003AsmGcLY",
  });
});

module.exports = router;
