import { createClient } from "@libsql/client";
export const runtime = 'edge';
const client = createClient({
    url: process.env.TURSO_BASE_URL,
    authToken: process.env.TURSO_TOKEN_KEY
})

export async function POST(request) {
    try {

        const data = await request.json();
        const { nombre, correo, numero, servicio, mensaje } = data;

        if (!nombre || !correo || !numero || !servicio || !mensaje) {
            return new Response(JSON.stringify({ message: 'Todos los campos son requeridos' }), { status: 400 });
        }

        /* Revisar si correo existe */
        const checkEmail = await client.execute({
            sql: `SELECT correo FROM Inscripciones WHERE correo = ?`,
            args: [correo],
        });

        if (checkEmail.rows.length > 0) {
            return new Response(JSON.stringify({ message: 'El correo ya está registrado' }), { status: 200 });
        }
        /* guardar sino existe */
        await client.execute({
            sql: `INSERT INTO Inscripciones (nombre, correo, numero, servicio, mensaje)
            VALUES (?, ?, ?, ?, ?)`,
            args: [nombre, correo, numero, servicio, mensaje],
        });
        return new Response(JSON.stringify({ message: 'Datos guardados exitosamente' }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ message: 'Error al guardar los datos' }), { status: 500 });
    }
}