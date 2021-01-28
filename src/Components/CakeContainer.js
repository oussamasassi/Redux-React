import React from "react";
import { buyCake } from "../redux/index";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h1> Number of cake {props.nbrCake}</h1>
      <button onClick={props.buyCake}>Buy a cake</button>
    </div>
  );
}

//lié le state au props
const mapStateToProps = (state) => ({ nbrCake: state.cake.numberCake });

//liee le diclencheur "dispatch" de l'action aux props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//connect CakeContainer to the store et ainsi on peut acceder au state et action utilisé par le reducer
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
