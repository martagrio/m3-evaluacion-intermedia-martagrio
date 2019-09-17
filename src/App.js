import React from 'react';
import pokemons from './pokemons';
import PokeList from './components/PokeList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: pokemons,
			favs: []
		}

		this.markFav = this.markFav.bind(this);
  }

	markFav (event) {
		const fav = parseInt(event.currentTarget);

		this.setState({favs: fav.id});
	}

  render() {
    return (
      <div className="app">
        <h1 className="app__title">mi lista de pokemons</h1>
				<PokeList 
					pokemons = {this.state.pokemons} 
					favs = {this.state.favs}
					markFav = {this.markFav}
				/>
      </div>
    );
  }
}

export default App;