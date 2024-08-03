import Header from "../components/home/Header";
import Servicios from "../components/home/Servicios";
import Contactanos from "../components/home/Contactanos";
import PreguntasFrecuentes from "../components/home/PreguntasFrecuentes";

export const metadata = {
  title: "NyAsociados",
  description: "Creación de paginas web, contabilidad y Excel",
  icons: {
    icon: '/logo_dark.png',
  },
  keywords:["Landing"]
};

export default function Home() {
  return (
    <main className="flex flex-col gap-[165px]">
      <Header/>
      <Servicios/>
      <Contactanos/>
      <PreguntasFrecuentes/>
    </main>
  );
}
