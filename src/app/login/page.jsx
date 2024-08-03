'use client'
import { useState } from "react"
import axios from "axios";
import { useRouter } from 'next/navigation';

import { square } from 'ldrs'

square.register()



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessasge] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await axios.post('/api/login', { email, password })
            setMessasge(response.data.message)

            if (response.status === 200) {
                console.log('Login successful');
                const token = await response.data.token
                localStorage.setItem('token', token);
                setTimeout(() => {
                    setLoading(false)
                    setMessasge('');
                    router.push('/adminPage');
                }, 1000);
            }

        } catch (err) {
            setTimeout(() => {
                setLoading(false)
                setMessasge(err.response.data.message);
                console.log('error del front: ', err)
            }, 1000);
        }
    }

    return (
        <>
            <div className="flex h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
                {/* mensaje de carga */}
                {loading ? (
                    <div className="">
                        {/* <span className="text-white font-bold text-5xl">Cargando...</span> */}
                        <l-square
                            size="35"
                            stroke="5"
                            stroke-length="0.25"
                            bg-opacity="0.1"
                            speed="1.2"
                            color="white"
                        ></l-square>
                    </div>
                ) : (
                    <div>
                        {/* El login como tal*/}
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                            <h2 className="mt-10 text-center text-2xl md:text-5xl font-bold leading-9 tracking-tight text-white">
                                Iniciar sesión
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                            <form onSubmit={handlesubmit} method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Correo
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-white">
                                            Contraseña
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Olvidaste la contraseña?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-black px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="text-red-500 font-semibold">{message}</div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Iniciar sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}