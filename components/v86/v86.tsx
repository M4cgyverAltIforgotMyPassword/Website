"use client";

import Script from "next/script";
import React, { useRef } from "react";

type V86Props = {
  biosUrl: string;
  vgaBiosUrl: string;
  floppyUrl?: string;
  cdromUrl?: string;
  hdaUrl?: string;
  autostart?: boolean;
};

declare const V86Starter: any;

const V86Component: React.FC<V86Props> = ({
  biosUrl,
  vgaBiosUrl,
  floppyUrl,
  cdromUrl,
  hdaUrl,
  autostart = true,
}) => {
  const screenContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Script
        src="/static/projects/v86/build/libv86.js"
        onReady={() => {
          const emulator = new V86Starter({
            wasm_path: "/static/projects/v86/build/v86.wasm",
            memory_size: 512 * 1024 * 1024,
            vga_memory_size: 32 * 1024 * 1024,
            screen_container: screenContainerRef.current,
            bios: {
              url: biosUrl,
            },
            vga_bios: {
              url: vgaBiosUrl,
            },
            fda: {
              url: floppyUrl
            },
            cdromUrl: {
              url: cdromUrl
            },
            hda: {
              url: hdaUrl
            },
            autostart: autostart,
          });
        }}
      />
      
      <div ref={screenContainerRef}>
        <div style={{whiteSpace: "pre", fontSize:"min(14.5px, .8vw)", fontFamily: "monospace"}}/>
        <canvas style={{display: "none"}}></canvas>
      </div>
    </>
  );
};

export default V86Component;