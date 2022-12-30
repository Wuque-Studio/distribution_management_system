import { defineStore } from "pinia";

interface UserInfo {
  name: string;
  role: string;
}

export const useTokenStore = defineStore("token", {
  state: () => {
    return {
      token: "" as string,
      user: { name: "", role: "" } as UserInfo,
    };
  },
  persist: {
    key: "wuque-token",
    storage: sessionStorage,
  },
});
