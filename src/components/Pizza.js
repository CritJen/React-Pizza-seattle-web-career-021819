import React from "react";
import PizzaForm from "./PizzaForm.js";

const Pizza = props => {
  let { topping, size, vegetarian } = props.pizza;
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.handlePizza(props.pizza)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
