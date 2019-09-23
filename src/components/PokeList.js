import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './pokelist.css';

class PokeList extends React.Component {
	render() {
		return(
			<ul className="pokemons__list">
				{this.props.pokemons
					.map((pokemon) => {
						return (
							<li className="pokemon" key={pokemon.id} id={pokemon.id}>
								<Pokemon
									pic = {pokemon.url}
									name = {pokemon.name}
									type = {pokemon.types}
									favs = {this.props.favs}
									markFav = {this.props.markFav}
									id = {pokemon.id}
								/>
							</li>
						);
					}
					)	
				}
			</ul>
		);
	}
}

PokeList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
	markFav: PropTypes.func.isRequired,
	favs: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PokeList;