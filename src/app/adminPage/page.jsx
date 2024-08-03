'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Resumen from '../../components/adminPage/Resumen';


export default function AdminPage() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('token');

            if (token) {
                try {
                    // Opcional: Verificar el token con una solicitud a la API
                    setAuthenticated(true);
                } catch (error) {
                    console.error('Token verification failed:', error);
                    setAuthenticated(false);
                }
            } else {
                setAuthenticated(false);
            }

            setLoading(false);
        };

        checkAuthentication();
    }, []);

    useEffect(() => {
        if (!loading && !authenticated) {
            router.push('/login');
        }
    }, [loading, authenticated, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return authenticated ? (
        <div className='pt-40 text-white'>
            <h5 className='text-center font-bold text-3xl md:text-5xl'>Resumen de formulario</h5>
            <Resumen/>
        </div>
    ) : null;
}