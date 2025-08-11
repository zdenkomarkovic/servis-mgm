"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Naš tim dijagnostikuje i otklanja sve vrste kvarova:
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/puric.jpg"}
            width={500}
            height={800}
            alt="slep puric cacak "
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
