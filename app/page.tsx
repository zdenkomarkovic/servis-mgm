import About from "@/components/About";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Statistika from "@/components/Statistika";
import { cards1Data, cards2Data } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About />
      <Cards1 title={"Naše usluge"} data={cards1Data} />
      <PozoviteNasOdmah />
      <Cards2 title={"Zašto izabrati Servis MGM"} data={cards2Data} />
      <Statistika />
      <Cardlist />
    </div>
  );
}
