import express from 'express';
import { renderLogin, renderSignup, handleSignup, handleLogin, handleLogout } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', renderLogin);
router.get('/signup', renderSignup);
router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.post('/logout', handleLogout);

export default router;
