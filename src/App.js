import React, { Component } from 'react';
import { CardList } from './components/card-list/cardlist.component.jsx';
import { SearchBox } from './components/search-box/searchbox.component.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {

    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users })
      })

  }

  onSearchMonster = (e) => {

    this.setState({ searchField: e.target.value })

  }
  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (


      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder='search monsters' handleChange={this.onSearchMonster}></SearchBox>

        <CardList monsters={filteredMonsters}>
        </CardList>


      </div>
    );
  }
}


export default App;
