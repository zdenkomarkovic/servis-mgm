"use client";
import CTA from "@/components/CTA";
import { pages } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";
import Cards2Kosina from "@/components/Cards2Kosina";

const page = () => {
  return (
    <div className=" py-32 mx-auto space-y-6 md:space-y-12">
      <div className="container px-2 md:px-4 mx-auto space-y-6 md:space-y-12">
        <h1>{pages.console.title}</h1>
        <p className="md:px-32 text-center">{pages.console.text}</p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-12 items-center justify-center">
          <div>
            {pages.console.description && (
              <p className="font-bold text-primary text-center">
                {pages.console.description}
              </p>
            )}
            <ul className="px-6">
              {pages.console.lines.map((line, i) => {
                return <li key={i}>{line}</li>;
              })}
            </ul>
          </div>
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
            whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden w-full md:w-1/3"
          >
            <Image
              src={pages.console.image}
              width={500}
              height={500}
              alt={pages.console.alt}
            />
          </motion.div>
        </div>
        <p className="md:px-32 text-center text-primary">
          {pages.console.workflow}
        </p>
      </div>
      <CTA text={pages.console.cta} />
      <Cards2Kosina title={"Zašto izabrati nas"} data={pages.console.whyus} />
    </div>
  );
};

export default page;
