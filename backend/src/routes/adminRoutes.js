import express from 'express';

import adminController from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';

const router = express.Router();

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
router.get('/users', protect, admin, adminController.getAllUsers);

router.delete('/users/:id', adminController.deleteUser);

export default router;