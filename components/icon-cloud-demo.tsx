"use client";
import { fontLexend, fontDangrek, fontAcme } from "@/config/fonts";
import React, { useEffect, useRef, useState } from "react";
import TagCloud from "TagCloud";

const TextCloudDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState(200);
  const [fontScale, setFontScale] = useState(1);

  const texts = [
    "Assertividade",
    "Solução",
    "Negócios",
    "Finanças",
    "Eficiência",
    "Automação",
    "Otimização",
    "Comunicação",
    "Tecnologia",
    "Resultado",
  ];

  const gradients = [
    "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400",
    "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400",
    "bg-gradient-to-r from-green-600 via-green-600 to-green-400",
    "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400",
    "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400",
    "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400",
    "bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400",
    "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400",
    "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400",
    "bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600",
  ];

  const baseSizes = [25, 20, 25, 25, 20, 20, 20, 20, 20, 25];
  const sizes = baseSizes.map((size) => size * fontScale);

  const fonts = [
    `${fontDangrek.className}`,
    `${fontAcme.className}`,
    "font-mono",
    "font-bold",
    "font-extralight",
    "font-medium",
    "font-black",
    `${fontLexend.className}`,
    `${fontLexend.className}`,
    `${fontLexend.className}`,
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 250) {
        setRadius(80);
        setFontScale(0.5);
      } else if (screenWidth < 480) {
        setRadius(100);
        setFontScale(0.6);
      } else if (screenWidth < 640) {
        setRadius(150);
        setFontScale(0.8);
      } else {
        setRadius(200);
        setFontScale(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove qualquer instância anterior
    containerRef.current.innerHTML = "";

    TagCloud(containerRef.current, texts, {
      radius,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    });

    const applyStyles = () => {
      const tags = containerRef.current?.querySelectorAll("span") || [];
      tags.forEach((tag, index) => {
        const element = tag as HTMLElement;
        element.classList.add("text-transparent", "bg-clip-text");

        gradients[index % gradients.length].split(" ").forEach((cls) => {
          element.classList.add(cls);
        });

        element.classList.add(fonts[index % fonts.length]);
        element.style.fontSize = `${sizes[index % sizes.length]}px`;
      });
    };

    // Aguarda renderizar os elementos antes de aplicar estilos
    setTimeout(applyStyles, 100);

  }, [radius, fontScale]);

  return (
    <div className="flex justify-center items-center w-full h-[400px]">
      <div ref={containerRef} className="tagcloud" />
    </div>
  );
};

export default TextCloudDemo;
