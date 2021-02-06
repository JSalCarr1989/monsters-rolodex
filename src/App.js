import './App.css';
import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleClick = this.handleClick.bind(this)

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then(body => this.setState({ monsters: body }))

  }

  handleClick() {
    console.log('esto es un click')
    // this.setState({
    // })
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={'search monsters'}
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
