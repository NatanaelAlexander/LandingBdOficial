import Image from "next/image"
import logo from "/public/logo_dark.png"
export default function Footer() {
    return (
        <footer className="container flex flex-col md:mx-auto px-5 pb-5 gap-2 md:gap-5 text-white">
            <div className="flex flex-col justify-center items-center mx-auto">
                <figure>
                    <Image
                        className="w-14"
                        width={56}
                        height={56}
                        priority
                        alt="Logo de Nyasociados"
                        src={logo}
                    />
                </figure>

                <p>Ayudamos a que tú y tu negocio crezcan</p>
            </div>
            <figure className="h-1 border-b-[0.5px] border-white"></figure>
            <div className="text-center flex flex-col md:flex-row md:justify-between">
                <p>© Natanael y Asociados 2024. Todos los derechos reservados.</p>
                <p>+56 93303068 nyasociados@nyasociados.com</p>
            </div>
        </footer>
    )
}