import React, { Component } from "react";
import axios from 'axios';
import './style.css';

class Input extends Component {
  state = {
    value: ""
  }
  onChangeHandler = (e) => {
    this.setState({
      value: e.currentTarget.value
    })
  }
  sendData = async (e) => {
    e.preventDefault();
    let currentIds = this.props.notes.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    await axios.post("https://reactnotesapi.herokuapp.com/api/putData", {
      id: idToBeAdded,
      text: this.state.value
    });
    this.props.getData();
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.sendData(e)}>
          <input
            value={this.state.value}
            onChange={this.onChangeHandler}
            placeholder="Enter task"
          />
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default Input;
