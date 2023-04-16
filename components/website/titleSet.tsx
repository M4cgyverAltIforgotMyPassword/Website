"use client";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch, store } from "@/components/redux";  
import { setTitle } from "@/components/website/titleSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function TitleSet({ children }: {children?: React.ReactNode}) {
    const dispatch = useAppDispatch();
    dispatch(setTitle(children));

    store.dispatch(setTitle(children)) ; 

    return <div style={{display:"none"}}>{children}</div>;
}