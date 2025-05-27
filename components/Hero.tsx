import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaAngellist } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="pb-20" id='hero'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill="white"' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw] fill="purple"' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] fill='blue'" />

        {/* Radial Grid */}
        <div className="relative top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div
            className="pointer-events-none absolute inset-0 
            flex items-center justify-center
           bg-white 
           dark:bg-black
           [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
            "
          />
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase text-center text-xs text-blue-100 max-w-[50vw] tracking-widest">
                Hi, I&apos;m <strong>Eric Teh</strong> ✨
              </h2>

              <TextGenerateEffect
                  className="capitalize text-center text-[40px] md:text-5xl lg:text-6xl"
                  words="I build accessible and engaging web experiences"
              />

              <p className="text-center mt-4">
                I&apos;m a software engineer specializing in designing and building frontend solutions by putting users first.
              </p>

              <a href="#about">
                <MagicButton 
                title='Show my Work' 
                position='left'
                icon={<FaAngellist /> }
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
