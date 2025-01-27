import express from 'express';
import { loginUser, signupUser } from '../controllers/userController.js';

const router = express.Router();

// login route (no authentication required)
router.post('/login', loginUser);

// signup route (no authentication required)
router.post('/signup', signupUser);

export default router;
