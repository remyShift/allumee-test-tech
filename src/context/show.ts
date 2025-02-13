import Show from "@/models/Show";
import { create } from "zustand";

export const useShow = create<{
    show: Show;
    setShow: (show: Show) => void;
}>((set) => ({
    show: new Show(),
    setShow: (show) => set({ show })
}));
