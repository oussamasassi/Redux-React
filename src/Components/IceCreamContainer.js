import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

function IceCreamContainer() {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>number of ice cream {numberOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}> Buy ice Cream</button>
    </div>
  );
}

export default IceCreamContainer;
