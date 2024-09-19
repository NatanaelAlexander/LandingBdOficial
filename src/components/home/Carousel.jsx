'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { services } from '../../data/service';
import '@splidejs/react-splide/css';
import './style.css'

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
/* https://images.pexels.com/photos/27774130/pexels-photo-27774130/free-photo-of-mar-blanco-y-negro-naturaleza-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */
const Carousel = () => {
    return (
        <>
            <article className="text-center">
                <h2 className="text-gray-200 flex flex-col font-bold text-4xl md:text-6xl">Servicios <span className="text-gray-500 text-lg font-normal md:font-medium pt-2">Elige el servicio que más te convenga</span></h2>
            </article>
            <section className='flex flex-col justify-center items-center'>

                <Splide
                    className='w-3/4 md:h-2/3 md:h-max-[150px] md:px-14 rounded-lg'
                    options={{
                        type: 'loop',
                        drag: 'free',
                        focus: 'center',
                        autoScroll: {
                            speed: 2,
                        },
                        perPage: 2,  // Mostrar 3 elementos a la vez,
                        gap: '1rem',
                        autoplay: true,
                        focus: 'center',
                        padding: '0%',
                        trimSpace: false,
                        pagination: true,
                        breakpoints: {
                            640: {
                                perPage: 1, // Cambia a 1 elemento visible en pantallas pequeñas
                            },
                            1024: {
                                perPage: 2, // Cambia a 2 elementos visibles en pantallas medianas
                            },
                        },
                    }}
                    extensions={{ AutoScroll }}>
                    {services.map((service, key) => (
                        <SplideSlide key={key} className='flex rounded-lg justify-center gap-2 flex-col cursor-pointer relative group transition-all'>
                            <div className='backdrop-blur-sm rounded-lg px-4 bg-black/20 hover:bg-black/40 hover:backdrop-blur-md transition-all duration-200 absolute w-full h-full flex flex-col justify-center items-center'>
                                <h3 className='text-white text-xl text-center font-bold drop-shadow mb-3'>{service.nombreCorto} - {service.nombreLargo}</h3>
                                <p className='text-white text-lg text-center font-medium hidden group-hover:flex transition-all duration-500'>{service.descripcion}</p>
                            </div>
                            <img className='rounded-lg h-[350px] object-cover' src={service.url} alt="Imagen" />
                        </SplideSlide>
                    ))}


                </Splide>
                <div className='text-white mt-10 cursor-pointer text-base font-medium hover:scale-105 transition-all'>
                    <p className='border-b-2'>
                        Ver todos los servicios
                    </p>
                </div>

            </section>

        </>
    )
}
export default Carousel;