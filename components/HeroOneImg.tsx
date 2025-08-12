"use client";

import Hero3 from "../public/hero.png";
import Hero2 from "../public/herom.png";
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
        className="hidden md:block w-full h-[100dvh] object-cover"
      />
      <Image
        src={Hero2}
        alt="servis racunara"
        fill
        className="md:hidden w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto  flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="flex flex-col">
          <span>Servis MGM</span>
          Servis i popravka računara, elektronike i konzola
        </h1>
        <p className="text-white text-center">
          Dobrodošli u Servis MGM, vaš pouzdan partner za servis i popravku
          laptop računara, desktop računara, elektronike i gejming konzola.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="tel:+3816000000">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="text-primary border-2 border-primary md:text-muted md:bg-primary rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
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
