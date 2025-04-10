import express from 'express';
import { welcome, loginUser } from '../controllers/loginController.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.get('/', welcome);
router.post('/login', loginUser);

export default router; // 💥 ESTA LÍNEA ES CLAVE para que funcione el import default
