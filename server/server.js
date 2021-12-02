const express = require('express')
const products = require('./data/products')
const db = require('./config/connection');
const productRoutes = require('./routes/productRoutes')

require("dotenv").config();



const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
  })
  
  
app.use ('/api/products', productRoutes)

  db.once('open', () => {
 app.listen(PORT,  () => {
    console.log(` Now listening on localhost:${PORT}`);
    console.log('###########################$$$$$$$$$$$$$$$$$$$connected to MONGO_ATLAS\n', process.env.MONGODB_URI)
  });
});