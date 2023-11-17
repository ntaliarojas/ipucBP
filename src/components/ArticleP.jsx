import React from "react";
import fotoPrincipal from "../assets/images/fotoPrincipal.jpeg";
import fondo from "../assets/images/fondo.png";
import img1 from "../assets/images/img1.jpg";

import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export const ArticleP = () => {
  return (
    <section id="inicio">
<div>


      <picture>
        <source media="(max-width: 640px)" srcSet={fotoPrincipal} />
        <source media="(min-width: 641px)" srcSet={fondo} />
        <img
          src="{fotoPrincipal}"
          alt="foto pastor"
        />
      </picture>


      </div>

    </section>
  );
};
