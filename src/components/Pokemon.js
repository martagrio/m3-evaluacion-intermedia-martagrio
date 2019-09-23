import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends React.Component {

	  isFav(id) {
    const savedFav = this.props.favs;
    if (savedFav.length > 0) {
      const item = savedFav.findIndex(item => parseInt(item.id) === id);
      if (item < 0) {
        return '';
      } else {
        return 'fav';
      }
    } else {
      return '';
    }
  }; 
    
	render() {
		return(
			<div className={`card-pokemon ${this.isFav(this.props.id)}`} onClick={this.props.markFav} id={(this.props.id)}>
				<img src={this.props.pic} alt={this.props.name} className="card-pokemon-img"/>
				<h2 className="card-pokemon__name">{this.props.name}</h2>
				<ul className="card-pokemon__types">
					{this.props.type.map((type, id) => {
						return (
							<li className="card-pokemon__type" key={id}>{type}</li>
						);
					})}
				</ul>
			</div>
		)
	}
}

Pokemon.propTypes = {
	pic: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.arrayOf(PropTypes.string).isRequired,
	id: PropTypes.number.isRequired,
	markFav: PropTypes.func.isRequired,
	favs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokemon;