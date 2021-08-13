import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDecrement = (selectedCounter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(selectedCounter);
    counters[index] = { ...selectedCounter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleIncrement = (selectedCounter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(selectedCounter);
    counters[index] = { ...selectedCounter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="cotainer">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
