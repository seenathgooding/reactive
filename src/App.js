import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bestCountry:'The Best Country is',
      sgooding: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://restcountries.com/v2/all")
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
        <div className="seenath" >Seenath Gooding 814117267</div>
        <container className="bestcountrytrinidad" >{this.state.bestCountry}</container>
        <p> <button onClick={() => {this.setState({bestCountry:'Trinidad'})}}>What's the best country?</button> </p>
        <SearchBox className='SearchboxSAG'
          placeholder="Search Countries"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList sgooding={filtered} />
      </div>
    );
  }
}

export default App;
