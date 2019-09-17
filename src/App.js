import React from 'react';
import pokemons from './pokemons';
import PokeList from './components/PokeList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: pokemons,
			favs: [1,2,3,4,5,6,7,8,9]
		}
		this.markFav = this.markFav.bind(this);
  }

	  markFav(event) {
		const favID = parseInt(event.currentTarget.id);
		console.log(favID);
		const checkFav = this.state.favs.find(item => item.id === favID);

    this.setState(prevState => {
      const saveFavs = [...prevState.favs];
      const result = saveFavs.findIndex(item => item.id === favID);

      if (result < 0 ) {
        // Si no existe, adentro
        saveFavs.push(checkFav);
      } else {
        // Si existe en favs, lo borramos
        saveFavs.splice(result,1);
      }
      /* localStorage.setItem('favs', JSON.stringify(newFavs)); */ 
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