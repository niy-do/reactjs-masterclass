import { atom } from "recoil";

export interface IRecoilState {
  master: string;
  slave: string;
}

export const recoilState = atom<IRecoilState>({
  key: "recoilState",
  default: { master: "master", slave: "slave" },
});
