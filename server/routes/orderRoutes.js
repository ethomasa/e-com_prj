
const express = require('express')
const router = express.Router()
const protect = require ('../utils/authMiddleware')
const {addOrderItems, getOrderById, updateOrderToPaid}= require('./orderController')
//const  = require('./orderController')


router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

  module.exports = router