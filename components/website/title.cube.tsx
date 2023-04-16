"use client";

import Image from "next/image";
import Cube from "@/components/website/cube"; 

import { useRef } from "react";

export default function TitleCube () {
    const audioBoom = useRef<HTMLAudioElement>(null);
  
    const handleClick = () => { 
      if (audioBoom.current) {
        audioBoom.current.currentTime = 0.25;
        audioBoom.current.play();
      }
    };

    return (
        <div style={{float:"right", marginRight:"25px", marginTop:"2px", zIndex:2, cursor:"pointer"}} onClick={handleClick}> 
            <Cube>  
                <Image src="/static/images/pizza.png" alt="funny pizza gif" width={120} height={100} style={{marginLeft:"-20px", marginTop:"-10px"}}/> 
            </Cube> 

            <audio ref={audioBoom} src="/static/sounds/boom.mp3" />
        </div> 
    );
}