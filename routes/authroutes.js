import express from 'express';
import { loginUser } from '../controllers/loginController.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.post('/login', loginUser);

export default router;