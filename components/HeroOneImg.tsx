"use client";

import Hero3 from "../public/hero.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={Hero3}
        alt="servis racunara"
        fill
        className="w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto  flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="flex flex-col">
          <span>Servis MGM</span>
          Servis i popravka računara, elektronike i konzola
        </h1>
        <p className="text-white text-center">
          Dobrodošli u Servis MGM, vaš pouzdan partner za servis i popravku
          laptop računara, desktop računara, elektronike i gejming konzola. Bilo
          da vam je potrebna brza dijagnostika, zamena komponenti, čišćenje
          uređaja ili sklapanje nove konfiguracije po meri – kod nas ćete dobiti
          stručnu uslugu, kvalitetne delove i garanciju na rad.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="tel:+3816000000">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className=" text-muted bg-primary rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
            >
              Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
