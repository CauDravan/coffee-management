import express from 'express';

import authController from '../controllers/authController.js';

const router = express.Router();

router.get('/profile', authController.getProfile);

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;