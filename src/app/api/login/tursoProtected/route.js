import { createClient } from "@libsql/client";

const client = createClient({
    url: process.env.TURSO_BASE_URL,
    authToken: process.env.TURSO_TOKEN_KEY
});

export async function POST() {
    try {
        const { rows } = await client.execute("SELECT * FROM Inscripciones");
        if (rows.length > 0) {
            return new Response(JSON.stringify({ inscripciones: rows }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: 'no hay usuarios registrados' }), { status: 404 });
        }
    } catch (err) {
        return new Response(JSON.stringify({message: 'Error del servidor protegido:'}), { status: 500 });
    }
}
