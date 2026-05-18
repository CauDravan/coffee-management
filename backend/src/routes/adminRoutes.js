const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

/// Product Management
router.post('/products', adminController.createProduct);

router.put('/products/:id', adminController.updateProduct);

router.delete('/products/:id', adminController.deleteProduct);

/// Category Management
router.post('/categories', adminController.createCategory);

/// Order Management
router.get('/orders', adminController.getAllOrders);

router.put('/orders/:id/status', adminController.updateOrderStatus);

/// User Management
router.get('/users', adminController.getAllUsers);

router.delete('/users/:id', adminController.deleteUser);

module.exports = router;