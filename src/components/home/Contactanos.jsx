'use client';
import axios from 'axios';
import { useState } from 'react';
import { services } from '../../data/service';

export default function Contactanos() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        numero: '',
        servicio: '',
        mensaje: ''
    });

    const [buttonText, setButtonText] = useState('Enviar');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const validation = () => {
        for (let i in formData) {
            if (formData[i] === '') {
                return false;
            }
        }
        return true;
    }

    const send = async (event) => {
        console.log(formData)
        event.preventDefault(); // Evitar que la página se recargue
        setButtonText('Enviando Correo');
        setIsButtonDisabled(true);
        try {
            if (validation()) {
                const response = await axios.post('/api/sendEmail', formData);

                if (response.status === 200) {
                    console.log('Correo enviado exitosamente');

                    // Guardar los datos en la base de datos
                    const dbResponse = await axios.post('/api/saveBd', formData);

                    if (dbResponse.status === 200) {
                        console.log('BD funcionando');
                    } else {
                        console.log('BD Error');
                    }

                    // Limpiar los campos del formulario
                    LimpiarFormulario('Enviar')
                    // Volver a habilitar el botón después de 10 segundos
                    habilitarBoton('Correo enviado exitosamente')
                } else {
                    console.log('Error Form');
                    setButtonText('Se ha producido un error');
                }
            } else {
                console.log('Datos Form invalidos');
                habilitarBoton('Datos incompletos')
            }
        } catch (error) {
            console.log('error', error);
            habilitarBoton('Reintentar')
        }
    };

    const habilitarBoton = (mensaje) => {
        setButtonText(mensaje);
        setIsButtonDisabled(false);
        setTimeout(() => {
            console.log('Set Time out del form')
            setIsButtonDisabled(false);
            setButtonText('Enviar');
            LimpiarFormulario()
        }, 5000);
    }

    const LimpiarFormulario = () => {
        setFormData({
            nombre: '',
            correo: '',
            numero: '',
            servicio: '',
            mensaje: ''
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className="px-5 flex flex-col gap-[50px] pb-5 md:pb-10">

            <article className="text-center">
                <h2 className="text-white flex flex-col font-bold text-4xl md:text-6xl">
                    Agendar cotización
                    <span className="text-gray-500 text-lg font-normal md:font-medium pt-2">
                        Llena el formulario y nos pondremos en contacto contigo a la brevedad.
                    </span>
                </h2>
            </article>

            <form onSubmit={send} className="grid gap-5 md:grid-cols-2 md:container md:mx-auto md:w-3/4 lg:w-2/5">
                <div className="flex flex-col md:col-span-1">
                    <label className="text-white font-medium text-sm">Nombre*</label>
                    <input
                        maxLength="25"
                        className="rounded-md h-8 p-1"
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col md:col-span-1">
                    <label className="text-white font-medium text-sm">Correo*</label>
                    <input
                        maxLength="40"
                        className="rounded-md h-8 p-1"
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col md:col-span-1">
                    <label className="text-white font-medium text-sm">Numero</label>
                    <input
                        type="number"
                        className="rounded-md h-8 p-1"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col md:col-span-1">
                    <label className="text-white font-medium text-sm">Servicio</label>
                    <select
                        id="service"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
                    >
                        <option className="text-font-medium hover:bg-gray-200" value="nada">Seleccione un servicio</option>

                        {services.map((servicio, key) => (
                            <option key={key} className="text-font-medium hover:bg-gray-200" value="Desarrollo Web">{servicio.nombreLargo} ({servicio.nombreCorto})</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col md:col-span-2">
                    <label className="text-white font-medium text-sm">Mensaje*</label>
                    <textarea
                        placeholder='Ingresa tu requerimiento'
                        rows="5"
                        className="rounded-md p-1"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                    />
                </div>
                <div className="md:col-span-2 flex justify-center items-center">

                    <button
                        type="submit"
                        className={`text-white md:font-semibold border-2 border-indigo-600 transition-all duration-300 hover:scale-105 rounded w-full md:w-96 py-1.5 px-4 ${isButtonDisabled ? 'bg-black font-bold' : 'bg-indigo-700 hover:bg-transparent hover:border-white  hover:shadow-white'}`}
                        disabled={isButtonDisabled}
                    >
                        {buttonText}
                    </button>

                </div>
            </form>
        </section>
    );
}
