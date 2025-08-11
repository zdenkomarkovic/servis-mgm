"use client";

import React from "react";
import { workList } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const Cardlist = () => {
  return (
    <div className="py-20">
      <div className="container px-2 md:px-64 mx-auto space-y-10">
        <h2 className="">Kako funkcioniše proces</h2>
        <div className="py-5 flex flex-col gap-4 md:gap-6 overflow-hidden">
          {workList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Naizmenično levo/desno
                whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } w-full`}
              >
                <Card className="w-full  md:w-3/4 shadow-lg md:p-5  border-primary shadow-primary">
                  <CardHeader>
                    <CardTitle className="font-gagalin flex gap-5 text-2xl md:text-4xl items-center mx-auto text-primary">
                      <span className="text-4xl md:text-6xl">
                        {<item.icon />}
                      </span>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-center text-xl md:text-3xl">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cardlist;
