import { BUY_CAKE } from "./cakeType";
const initialState = {
  numberCake: 10,
};

//selon le type d'action récu il modifie le state
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberCake: state.numberCake - action.payload,
      };

    default:
      return { ...state };
  }
};

export default cakeReducer;
