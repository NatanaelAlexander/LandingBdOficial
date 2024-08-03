import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { createClient } from "@libsql/client";
export const runtime = 'edge';
const client = createClient({
    url: process.env.TURSO_BASE_URL,
    authToken: process.env.TURSO_TOKEN_KEY
});

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request) {

    try {
        const data = await request.json();
        const { email, password } = data;

        if (!email || !password) {
            return new Response(JSON.stringify({ message: 'Email y contraseña son requeridos' }), { status: 400 });
        }

        // Buscar usuario por correo
        const { rows } = await client.execute({
            sql: `SELECT * FROM Usuarios WHERE correo = ?`,
            args: [email]
        });

        if (rows.length === 0) {
            return new Response(JSON.stringify({ message: 'Usuario no encontrado' }), { status: 404 });
        }

        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.contrasena);

        if (isPasswordValid) {
            const token = jwt.sign({ email: user.correo }, SECRET_KEY, { expiresIn: '1h' });
            return new Response(JSON.stringify({ message: 'Autenticación exitosa', token }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: 'Contraseña incorrecta' }), { status: 401 });
        }
    } catch (err) {
        return new Response(JSON.stringify({ message: 'Error interno del servidor' }), { status: 500 });
    }
}
