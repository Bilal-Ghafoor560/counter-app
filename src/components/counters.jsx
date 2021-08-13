import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    return (
      <div>
         <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm badge m-4"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
