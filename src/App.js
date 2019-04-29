import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPizza: null,
      pizzas: []
    };
    this.handlePizza = this.handlePizza.bind(this);
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(data => this.setState({ pizzas: data }));
  };
  handlePizza(pizza) {
    this.setState({ currentPizza: null }, () => {
      this.setState({ currentPizza: pizza });
    });
  }
  handleSubmit = updatedPizza => {
    let pizzaArray = this.state.pizzas.map(pizza => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza;
      } else {
        return pizza;
      }
    });
    this.setState({ pizzas: pizzaArray });
    fetch("http://localhost:3000/pizzas/" + updatedPizza.id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPizza)
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.currentPizza && (
          <PizzaForm
            pizza={this.state.currentPizza}
            handleSubmit={this.handleSubmit}
          />
        )}
        <PizzaList handlePizza={this.handlePizza} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
