"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import { GOOGLE_ADS_CONFIG } from "@/constants/google-ads";
  
const PozoviteNasOdmah = () => {
  const trackPhoneCall = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${GOOGLE_ADS_CONFIG.CONVERSION_ID}/${GOOGLE_ADS_CONFIG.PHONE_CALL_LABEL}`
      });
    }
  };
  return (
    <div className="bg-foreground text-primary mt-10 md:mt-20 py-10 md:py-20  border-primary border-y">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <h2 className="text-xl md:text-4xl text-center ">
          Servis MGM – da vaš uređaj ponovo radi kao nov, zakažite svoj termin!
        </h2>
        <a href="tel:+381645523333" onClick={trackPhoneCall}>
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" text-nowrap flex gap-3 text-3xl items-center text-muted bg-primary rounded-lg px-4 md:px-8 md:py-3 py-2"
          >
            <PhoneIcon /> Pozovite odmah
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
