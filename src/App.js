import React from 'react';
import pokemons from './pokemons';
import PokeList from './components/PokeList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: pokemons
		}
  }
  render() {
		console.log(pokemons[0].url);
    return (
      <div className="app">
        <h1 className="app__title">Mi lista de pokemons</h1>
				<PokeList pokemons = {this.state.pokemons} />
      </div>
    );
  }
}

export default App;