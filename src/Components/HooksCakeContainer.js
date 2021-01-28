import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numberOfCake = useSelector((state) => state.cake.numberCake);
  const dipatch = useDispatch();
  return (
    <div>
      <h1>Number of cake {numberOfCake}</h1>
      <button onClick={() => dipatch(buyCake())}>Buy a cake</button>
    </div>
  );
}

export default HooksCakeContainer;
