import { poppins } from "../../app/fonts";
import { SlArrowDown } from "react-icons/sl";

export default function Header() {
    return (
        <header className="relative h-[700px] md:h-[850px] w-full flex flex-col gap-14 justify-center items-center ">

            <video
                height="240"
                autoPlay
                preload="true"
                muted
                loop
                playsInline
                className="absolute rounded-lg opacity-85 md:opacity-70 h-full w-full object-cover object-center
                ">
                <source src="/video.mp4" type="video/mp4" />
            </video>
            {/* Esta chit es para el degradado */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-900 pointer-events-none"></div>

            <div className="relative px-5 flex flex-col gap-5 md:gap-7">
                <h1 className={`${poppins.className} antialiased text-4xl font-bold text-white text-center md:text-[5rem] md:leading-[85px]`}>Desarrolla tu carrera <br className="hidden md:flex" />
                    o potencia tu negocio</h1>
                <p className="font-medium text-center md:font-medium md:text-base drop-shadow-lg text-white">Landing pages, contabilidad y clases de Excel. Todo para que tu negocio o próximo negocio crezca.</p>
            </div>

            <div className="relative z-20 font-medium text-base text-white md:text-lg flex flex-row gap-5 md:gap-16">
                <button className="bg-indigo-700 rounded-lg border-indigo-700 px-6 py-2 md:px-10 md:py-3 hover:scale-105 transition-all border">Contáctanos</button>
                <button className="bg-transparent rounded-lg px-6 py-2 md:px-10 md:py-3 hover:scale-105 transition-all border">Ver Servicios</button>
            </div>
            <span className="absolute bottom-10 drop-shadow-xl">
                <SlArrowDown className="h-8 w-8 text-white float" />
            </span>
        </header>
    )
}