const mongoose = require('mongoose');
const db = require('./config/connection');
const users = require('./data/users.js')
const products = require('./data/products.js')
const User = require('./models/userModel.js')
const Product = require('./models/productModel.js')
const Order = require('./models/orderModel.js')
require("dotenv").config();

 db.once('open', importdata = async () => {
    try {
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
  
      const createdUsers = await User.insertMany(users)
  
      const adminUser = createdUsers[0]._id
  
      const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser }
      })
  
      await Product.insertMany(sampleProducts)
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });
  
  /*db.once('open', destroyData = async () => {
    try {
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
  
      console.log('Data Destroyed!')
    } catch (error) {
      console.error(`${error}`)
   
    }
  });*/


