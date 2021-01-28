import { BUY_CAKE } from "./cakeType";

//return an action identied by type
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
