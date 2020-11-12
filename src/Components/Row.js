import React from 'react'
import './Row.css'

function Row(props){
	return(
		<tr>
			<td>{props.name}</td>
			<td>{props.birthdate}</td>
			<td>{props.height}</td>
			<td>{props.mass}</td>
			<td>{props.homeworld}</td>
			<td>{props.species}</td>
		</tr>
	);
}

export default Row;