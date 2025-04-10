// index.js
import express from 'express';
import cors from 'cors';
import { conectarDB } from './conectar.js';
import authRoutes from './routes/authroutes.js';
import chivoRoutes from './routes/chivosRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/chivos', chivoRoutes);

// Conectar a la base de datos una sola vez
let conectado = false;

export default async function handler(req, res) {
    if (!conectado) {
        await conectarDB();
        conectado = true;
    }

    // Adaptador para que Express maneje la solicitud
    return app(req, res);
}
