import Header from "../components/home/Header";
import Contactanos from "../components/home/Contactanos";
import PreguntasFrecuentes from "../components/home/PreguntasFrecuentes";
import Carousel from '../components/home/Carousel'


export const runtime = 'edge';
export const metadata = {
  title: "NyAsociados",
  description: "Creación de paginas web, contabilidad y Excel",
  icons: {
    icon: '/logo_dark.png',
  },
  keywords: ["Desarollo web", "Creación de paginas web"]
};

export default function Home() {
  return (
    <main className="flex flex-col gap-[165px]">
      
      <Header />
      <Carousel />
      <Contactanos />
      <PreguntasFrecuentes />
    </main>
  );
}