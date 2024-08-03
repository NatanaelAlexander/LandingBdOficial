import { farHome } from "../../data/faqHome";
export default function PreguntasFrecuentes() {
    return (
        <div className="px-5 md:px-0 md:container md:mx-auto md:w-3/4 lg:w-2/5 grid gap-[50px] text-white">

            <article className="text-center">
                <h2 className="text-white flex flex-col font-bold text-4xl md:text-6xl">Preguntas Frecuentes</h2>
            </article>

            <div className="grid divide-y divide-neutral-200 w-full md:mx-auto">
                {farHome.map((item, index) => (
                    <div key={index} className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>{item.question}</span>
                                <span className="transition transform duration-300 group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                                        width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-3 transition-opacity duration-300 ease-in-out
                                group-open:opacity-100 opacity-0 text-gray-500">
                                {item.response}
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}