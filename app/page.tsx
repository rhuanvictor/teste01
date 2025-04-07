import { title, subtitle } from "@/components/primitives";
import Badge from "@/components/chip/chip";
import ScrollingBanner from "@/components/scrolling-banners/scrolling-banners";

import { LastButNotLeast } from "@/components/last-but-not-least";
import  {GradualSpacing}   from "@/components/gradual-spacing";
import { fontLexend } from "@/config/fonts";
import TextCloudDemo  from "@/components/icon-cloud-demo";

import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion";
import NextParticleComponent from '@/components/HeartParticles';
import CardExamples from '@/components/cards-examples';
import HeroTitle from '@/components/hero-title';



export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <section className="text-center w-full mx-auto py-10 max-w-[1324px] ">
        <HeroTitle />
        <Badge  />
      </section>

      
      <section className="flex flex-wrap justify-center gap-6 p-4 mt-96">
        <div className={`${title({ size: "sm" })}`}>
        <GradualSpacing
          className="font-display text-center font-bold tracking-normal text-sky-950 dark:text-white md:text-5xl md:leading-[5rem] relative z-10"
          text="Nossas Soluções:"
          onceInView={false} // 🔹 Anima só uma vez
        />  
        </div>
        <CardExamples  />
      </section>
     
      <section id="tecnologias" className="flex flex-wrap justify-center gap-6 p-4 mt-20">
        <div className={`${title({ size: "sm" })}`}>
          <GradualSpacing
            className="font-display text-center font-bold tracking-normal text-sky-950 dark:text-white md:text-5xl md:leading-[5rem] relative z-10"
            text="Tecnologias"
            onceInView={false} // 🔹 Anima só uma vez
          />  
        </div>
        <ScrollingBanner />
        <WhatsAppButton />
      </section>

      

      {/* Seção de Banner Rolante<NextParticleComponent />  <ScrollingBanner />*/}
      <section className="flex flex-wrap justify-center gap-6 p-4 mt-96">
      <TextCloudDemo  />
      
      </section>

      {/* Seção Final */}
      <section>
        <LastButNotLeast />
      </section>
    </section>
  );
}
