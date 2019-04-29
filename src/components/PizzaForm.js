import React from "react";

class PizzaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.pizza.id,
      topping: props.pizza.topping,
      size: props.pizza.size,
      vegetarian: props.pizza.vegetarian
    };
  }
  changePizza = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    let { topping, size, vegetarian } = this.state;
    return (
      <div
        className="form-row"
        onSubmit={() => this.props.handleSubmit(this.state)}
      >
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={topping}
            name="topping"
            onChange={event => this.changePizza(event)}
          />
        </div>
        <div className="col">
          <select
            value={size}
            selected={size}
            className="form-control"
            onChange={event => this.changePizza(event)}
            name="size"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={vegetarian}
              checked={vegetarian}
              name="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div
            className="form-check"
            onChange={event => this.changePizza(event)}
            name="vegetarian"
          >
            <input
              className="form-check-input"
              type="radio"
              value={!vegetarian}
              checked={!vegetarian}
              onChange={event => this.changePizza(event)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.props.handleSubmit(this.state)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
