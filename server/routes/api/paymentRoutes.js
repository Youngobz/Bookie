const express = require("express");

const router = express.Router();

const stripe = require("stripe")(
  "sk_test_51O6U88J88XA3XoTnFLegE5ozld0sN2yGOlaLviwKs1Trhgiui8haUPeUmCxF3CL1nDNSkI2ferFckKWMYYRncjgF00H0Xw0pKa",
  {
    apiVersion: "2023-10-16",
  }
);

router.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "AUD",
      amount: 10,
      automatic_payment_methods: { enabled: true },
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
      "pk_test_51O6U88J88XA3XoTnSJVCROUu8tUfZcoHspk31k3JBWqAqNrTjldczdaYoZyG0M0mHh0iGcREvijNYqk2vOa2dGqi00hyytQRMu",
  });
});

module.exports = router;
