import axios from "axios";
import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function Resumen() {
    const [cantidadUsuarios, setCantidadUsuarios] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const Usuarios = async () => {
            try {
                const response = await axios.post('/api/login/tursoProtected');
                setUsuarios(response.data.inscripciones || []);
                setCantidadUsuarios(response.data.inscripciones.length);
            } catch (err) {
                console.log('Get de usuarios', err);
            }
        };
        Usuarios();
    }, []);

    const exportToExcel = (data, filename) => {
        // Crea una nueva hoja de trabajo
        const ws = XLSX.utils.json_to_sheet(data);
        // Crea un libro de trabajo con la hoja creada
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Inscripciones');
        // Convierte el libro de trabajo a un blob
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
        const buf = new ArrayBuffer(wbout.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < wbout.length; i++) {
            view[i] = wbout.charCodeAt(i) & 0xff;
        }
        // Guarda el archivo
        const blob = new Blob([buf], { type: 'application/octet-stream' });
        saveAs(blob, filename);
    };

    return (
        <>
            <div className="grid md:grid-cols-2 md:px-10 items-center md:container md:mx-auto md:gap-20 md:mt-20 px-5 py-10 gap-10">
                <div className="flex flex-col gap-3 bg-zinc-700 rounded-lg py-5 lg:py-10 w-full text-center">
                    <p className="font-medium text-2xl">Usuarios registrados</p>
                    <p className="font-semibold text-5xl">
                        {cantidadUsuarios === 0 ? 'Cargando...' : cantidadUsuarios}
                    </p>
                </div>

                <div className="flex flex-col gap-5 bg-zinc-700 rounded-lg py-5 lg:py-10 w-full text-center">
                    <p className="font-medium text-2xl">Descargar datos</p>

                    <div className="flex flex-col lg:flex-row w-full lg:justify-center gap-3">
                        <div>
                            <button 
                                className="bg-black w-32 py-2 rounded-md hover:bg-zinc-900" 
                                onClick={() => exportToExcel(usuarios, 'usuarios.xlsx')}
                            >
                                Descargar Excel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
