import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: String,
    usuario: { type: String, unique: true },
    contraseña: String,
    rol: { type: String, enum: ['dueño', 'veterinario', 'encargado'] }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
