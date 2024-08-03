import serviciosMini from "../../data/serviciosMini"
import { IoIosArrowForward } from "react-icons/io";
export default function Servicios() {
    return (
        <section className="flex p-10 flex-col gap-[165px] container mx-auto px-5">

            <article className="text-center">
                <h2 className="text-white flex flex-col font-bold text-4xl md:text-6xl">Servicios <span className="text-gray-500 text-lg font-normal md:font-medium pt-2">Elige el servicio que más te convenga</span></h2>
            </article>

            <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

                {serviciosMini.map((servicios) => (
                    <div className="cursor-pointer hover:scale-[1.03] transition-all group text-white font-bold flex flex-col relative gap-5 rounded-lg bg-zinc-800 hover:bg-gradient-to-b from-zinc-700 px-6 py-8">
                        <h3 className="text-xl md:text-2xl md:font-semibold">{servicios.tittle}</h3>
                        <p className="leading-snug font-medium md:font-normal text-gray-300 md:text-gray-500 group-hover:text-gray-400">{servicios.description}</p>

                        <ul className="flex flex-col gap-1 list-disc list-inside">
                            {servicios.items.map((items, itemIndex) => (
                                <li className="font-semibold">{items.item}: <span className="text-gray-400 md:text-gray-500 font-medium md:font-normal">{items.descriptionItem}</span></li>
                            ))}
                        </ul>
                        <div className="flex justify-center pt-5">
                            <button className="border-b-2 py-2 px-9 transform transition duration-500 flex flex-row items-center relative md:font-medium md:text-lg">Revisar detalles<figure className="group-hover:translate-x-1 transition-all"><IoIosArrowForward /></figure></button>
                        </div>
                    </div>
                ))}

            </article>

        </section>
    )
}