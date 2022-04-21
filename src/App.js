import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sgooding: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => response.json())
      .then((users) => this.setState({ sgooding: users }));
  }

  render() {
    const { sgooding, searchField } = this.state;
    const filtered = sgooding.filter((sg) =>
      sg.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Universities"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList sgooding={filtered} />
      </div>
    );
  }
}

export default App;
