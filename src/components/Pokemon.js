import React from 'react';
import './pokemon.css';

class Pokemon extends React.Component {
	render() {
		return(
			<div className="card-pokemon">
				<img src={this.props.pic} alt={this.props.name} className="card-pokemon-img"/>
				<div className="card-pokemon-content">
					<h2 className="card-pokemon__name">{this.props.name}</h2>
					<ul className="card-pokemon__types">
						{this.props.type.map((type, id) => {
              return (
                <li className="card-pokemon__type" key={id}>{type}</li>
              );
            })}
					</ul>
				</div>
			</div>
		)
	}
}

export default Pokemon;