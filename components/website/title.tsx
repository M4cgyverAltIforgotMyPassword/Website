"use client";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/components/redux";  
import { setTitle } from "@/components/website/titleSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import TitleCube from "@/components/website/title.cube";
import Image from "next/image"

export default function Title () {  
    const children = useAppSelector((state) => state.title.children);

    console.log(children);

    return ( 
    <div className="win98-window intro">
        <div className="title"><p><Image src="/static/images/disk.png" width={10} height={10} alt="" /> Title</p></div>

        <TitleCube />
        
        {children}

    </div> );
}

