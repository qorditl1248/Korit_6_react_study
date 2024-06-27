import { atom } from "recoil";

export const mainSidebarShowAtom = atom({
  key: "mainSidebarShowState",   // 상태의 key
  default: false                 // 상태의 value
});