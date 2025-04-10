import User from '../models/user.js';

export const welcome = (req, res) => {
    res.send('API LISTA!');
};

export const loginUser = async (req, res) => {
    const { usuario, contraseña } = req.body;

    try {
        const user = await User.findOne({ usuario, contraseña });

        if (!user) {
            return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        }

        res.json({
            mensaje: `¡Bienvenido ${user.nombre}! Tu rol es: ${user.rol}`,
            nombre: user.nombre,
            usuario: user.usuario,
            rol: user.rol
        });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error del servidor', error: error.message });
    }
};
