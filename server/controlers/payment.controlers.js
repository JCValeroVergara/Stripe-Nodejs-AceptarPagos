import Stripe from 'stripe';



const stripe = new Stripe(
  'sk_test_51NKYY6ByQTeSJ7vdYptt7CuCubwFZgX0eB3ErrwMB1KUdf7N8Lfy2Mjtfd4cOcr6Qo6EbUgk6tTbjnLYSlXk7im300dZxZpHnz'
);

export const createSession = async (req, res) => {
  const session= await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: 'Laptop',
            description: 'Gaming Laptop',
          },
          currency: 'usd',
          unit_amount: 20000, //200.00 el valor se coloca en centavos
        },
        quantity:1
      },
      {
        price_data: {
          product_data: {
            name: 'TV',
            description: 'Smart TV',
          },
          currency: 'usd',
          unit_amount: 10000, // 100.00
        },
        quantity: 2
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4000/success',
    cancel_url: 'http://localhost:4000/cancel',
  });
  return res.json(session)
}