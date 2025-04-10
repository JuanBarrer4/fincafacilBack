import { loginUser } from './controllers/loginController.js';
import { conectarDB } from './conectar.js';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await conectarDB();
        return loginUser(req, res);
    } else {
        res.status(405).json({ mensaje: 'Método no permitido' });
    }
}
