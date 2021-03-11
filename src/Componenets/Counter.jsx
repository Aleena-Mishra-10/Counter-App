import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeigth: "bold"
  };
  ////constructor(){
  //super();
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}
  //handleIncrement = (product) => {
  //console.log("Increment Clicked", this);
  //console.log(product);
  //this.setState({ value: this.state.value + 1 });
  //};
  //doHandleIncrement = () => {
  // this.handleIncrement({id:1})
  //}
  render() {
    //console.log(this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increament
        </button>
        <buttton
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </buttton>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
