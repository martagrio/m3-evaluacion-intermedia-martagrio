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

/* 	markFav (event) {
		const fav = parseInt(event.currentTarget);
		this.setState(prevState => {
			return (
				favs: {...prevState.favs, 
				[id]: fav}
			)
		}
		)
	} */
	  markFav(event) {
    const favID = parseInt(event.currentTarget.id);
		console.log(favID);
    
/* 		const fav = this.state.favs(item => item === favID);

    this.setState(prevState => {
      const newFavs = [...prevState.favs];
   
      const result = newFavs.findIndex(item => item.show.id === favID);

      if (result < 0 ) {
        // Si no existe, adentro
        newFavs.push(futureFav);
      } else {
        // Si existe en favs, lo borramos
        newFavs.splice(result,1);
      }
      localStorage.setItem('favs', JSON.stringify(newFavs));

      return {
        favs: newFavs
      }
    }); */
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