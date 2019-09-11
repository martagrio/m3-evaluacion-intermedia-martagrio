import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './pokelist.css';

class PokeList extends React.Component {
	render() {
		return(
			<ol className="pokemons__list">
				<li className="pokemon">
					{this.props.pokemons
						.map((pokemon, id) => {
							return (
								<li className="pokemon" key={id}>
									<Pokemon
										pic = {pokemon.url}
										name = {pokemon.name}
										type = {pokemon.types}
									/>
								</li>
							);
						}
					 )	
					}
				</li>
			</ol>
		);
	}
}

PokeList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default PokeList;