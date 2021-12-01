const express = require('express')
const products = require('./data/products')
const db = require('./config/connection');

require("dotenv").config();



const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
  })
  
  app.get('/api/products', (req, res) => {
    res.json(products)
  })
  
  app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
  })
  


  db.once('open', () => {
 app.listen(PORT,  () => {
    console.log(` Now listening on localhost:${PORT}`);
    console.log('###########################$$$$$$$$$$$$$$$$$$$connected to MONGO_ATLAS\n', process.env.MONGO_URI)
  });
});