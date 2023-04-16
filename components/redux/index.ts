import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "@/components/website/titleSlice";

export const store = configureStore({
    reducer: {
        title: titleSlice,
    }
})

export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch