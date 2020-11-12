import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './Table.css'
import Row from './Row'

function TableComp(props){ 
	let count = -1;
	let rowItems;
		rowItems = props.characters.map(character => {
				count+=1;
				return <Row 
					key={count} 
					name={character.name} 
					birthdate={character.birth_year} 
					height={character.height} 
					mass={character.mass}
					homeworld={character.homeworld}
					species={character.species} />
		})
	return(
		<div className="table-container">
			<Table className="table" striped bordered hover variant="dark">
				<thead className="table-head">
					<tr>
						<th>Name</th>
						<th>Birth Date</th>
						<th>Height</th>
						<th>Mass</th>
						<th>Homeworld</th>
						<th>Species</th>
					</tr>
				</thead>
				<tbody>
					{rowItems}
				</tbody>
			</Table>
		</div>
	);
}

export default TableComp;