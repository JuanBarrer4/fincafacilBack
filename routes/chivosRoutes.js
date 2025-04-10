// routes/chivosRoutes.js
import express from 'express';
import Chivo from '../models/chivo.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.get('/cargarChivos', async (req, res) => {
    try {
        const chivos = await Chivo.find();
        res.json(chivos);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener los chivos' });
    }
});

export default router;