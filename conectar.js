// conectar.js
import mongoose from 'mongoose';

export const conectarDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) return; // Ya está conectado
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error.message);
        throw error;
    }
};
