const express = require('express')
const products = require('./data/products')
const db = require('./config/connection');
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const cors = require ('cors')
const Stripe = require('stripe')
const stripe = Stripe (process.env.STRIPE_SECRET_KEY)

require("dotenv").config()


const PORT = process.env.PORT || 5000



const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


  
app.use ('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
const path = require('path');

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.STRIPE_SECRET_KEY)
)


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});





  db.once('open', () => {
 app.listen(PORT,  () => {
    console.log(` Now listening on localhost:${PORT}`);
    console.log('###########################$$$$$$$$$$$$$$$$$$$connected to MONGO_ATLAS\n', process.env.MONGODB_URI)
  });
});