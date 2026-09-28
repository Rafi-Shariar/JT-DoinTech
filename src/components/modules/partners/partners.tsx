import React from "react";

import partnerImg from "@/assets/shared/Logo_Partner.png";
import Image from "next/image";
const Partners = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto">
        <Image
          src={partnerImg}
          alt="Pertner logo"
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Partners;
