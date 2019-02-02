import React, { Component } from "react";
import axios from "axios";
import NotesList from "./NotesList";
import Input from "./Input";



class App extends Component {
  state = {
    input: "",
    notes: []
  };

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    fetch("https://reactnotesapi.herokuapp.com/api/getData")
      .then(res => res.json())
      .then(res =>
        this.setState({
          notes: res
        })
      );
  };
  deleteNote = async id => {
    await axios.delete(`https://reactnotesapi.herokuapp.com/api/note/${id}`);
    this.getData();
  };
  sendData = async () => {
    let currentIds = this.state.notes.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    await axios.post("https://reactnotesapi.herokuapp.com/api/putData", {
      id: idToBeAdded,
      text: this.state.input
    });
    this.getData();
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="header" ><h1>Notes</h1></div>
          <Input getData={this.getData} notes={this.state.notes} />
          <NotesList getData={this.getData} notes={this.state.notes} delete={this.deleteNote} />
        </div>
      </div>
    );
  }
}

export default App;
