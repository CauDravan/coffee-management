import express from 'express';

import cartController from '../controllers/cartController.js';

const router = express.Router();

router.get('/', cartController.getCart);

router.post('/add', cartController.addToCart);

router.put('/update', cartController.updateCartItem);

router.delete('/remove/:productId', cartController.removeFromCart);

router.delete('/clear', cartController.clearCart);

export default router;