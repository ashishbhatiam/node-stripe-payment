const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripeController = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body

  const calculateOrderAmount = () => {
    // TODO: Calculate the order total on the server to prevent manipulating the amount
    return total_amount + shipping_fee
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'inr'
  })
  res.json({ clientSecret: paymentIntent.client_secret })
}

module.exports = stripeController
