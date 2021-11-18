import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let trasformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((accumalator, currentValue) => {
      return accumalator.concat(currentValue);
    }, []);

  if (trasformedIngredients.length === 0) {
    trasformedIngredients = <p>Please Start Adding Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {trasformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
