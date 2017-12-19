import React from 'react'
import planetInfo from '../services/planetsInfo'

export default () => ( 
		<div className="container">
		<h1></h1>
		<div className="row">
				<div className="info">Population: </div>
				<div className="info">Climate: </div>
				<div className="info">Terrain: </div>
				<div className="info">Featured in # films</div>
		</div>
		<button className="next">Next</button>
		</div>
)