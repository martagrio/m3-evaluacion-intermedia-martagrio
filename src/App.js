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

	  markFav(event) {
		const favID = parseInt(event.currentTarget.id);
		console.log(favID);
		const checkFav = this.state.pokemons.find(item => item.id === favID);

    this.setState(prevState => {
      const saveFavs = [...prevState.favs];
			console.log(saveFavs);
      const result = saveFavs.findIndex(item => item.id === favID);
			console.log(result);
      if (result < 0 ) {
        saveFavs.push(checkFav);
      } else {
        saveFavs.splice(result,1);
      }
      return {
        favs: saveFavs
      }
    });

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