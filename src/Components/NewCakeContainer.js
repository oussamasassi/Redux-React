import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  const numberOfCake = useSelector((state) => state.cake.numberCake);
  const dipatch = useDispatch();
  console.log(number);
  return (
    <div>
      <h1>
        Number of cake {props.name} {numberOfCake}
      </h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => dipatch(buyCake(number))}>Buy a cake</button>
    </div>
  );
}

export default NewCakeContainer;
