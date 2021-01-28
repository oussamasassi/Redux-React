import React, { Component } from "react";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import IceCreamContainer from "./Components/IceCreamContainer";
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import UserContainer from "./Components/UserContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NewCakeContainer name="name" />
          <IceCreamContainer />
          <CakeContainer />
          <HooksCakeContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
