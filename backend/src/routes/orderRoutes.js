import express from 'express';

import orderController from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/my-orders', orderController.getMyOrders);
router.get('/:id', orderController.getOrderById);

router.post('/', protect, orderController.createOrder);

export default router;