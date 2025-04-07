"use client";

import { title } from "@/components/primitives"; 
import  SvgComponent from "@/components/gradual-svg";
import  {GradualSpacing}   from "@/components/gradual-spacing";
import {FlipWords} from '@/components/TestCommunication';


const HeroTitle = () => {
  const words = ["eficiente!", "inteligente!"];
  return (
    <section className="text-center w-full mx-auto py-10 max-w-[1324px]">
      <div className={`${title({ size: "sm" })}`}>
        <h1 className="font-medium leading-[1.2] text-sky-950 dark:bg-zinc-50  dark:from-zinc-50 dark:to-fuchsia-50 dark:bg-clip-text dark:text-transparent" style={{ fontSize: 'clamp(24px, 5vw, 50px)' }}>
        Simplifique processos complexos com uma solução   
          
          <span className="relative inline-block">
            <strong>
            <FlipWords
              className="text-fuchsia-700 bg-gradient-to-b from-fuchsia-500 to-fuchsia-900 bg-clip-text dark:bg-gradient-to-b dark:from-zinc-400 dark:to-fuchsia-200 relative z-10"
              words={words}
            /></strong>
            <SvgComponent/>
          </span>
        </h1>
      </div>
      <div className="mt-4" />
    </section>
  );
};

export default HeroTitle;