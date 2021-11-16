import React, { Component } from "react";
import Aux from "../../hoc/Auex";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>
          <Burger />
        </div>
        <div>Built controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
