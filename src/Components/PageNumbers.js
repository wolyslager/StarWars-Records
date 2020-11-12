import React from 'react'
import './PageNumbers.css'

function PageNumbers(props){
	return(
		<nav aria-label="...">
		  <ul className="pagination">
		    <li className="page-item enabled">
		      <a className="page-link" onClick={() => props.updatePage('-')}>Previous</a>
		    </li>
		    <li className="page-item"><a className="page-link" onClick={() => props.updatePage(1)}>1</a></li>
		    <li className="page-item ">
		      <a className="page-link" onClick={() => props.updatePage(2)}>2 <span className="sr-only">(current)</span></a>
		    </li>
		     <li className="page-item"><a className="page-link" onClick={() => props.updatePage(3)}>3</a></li>
		    <li className="page-item ">
		      <a className="page-link" onClick={() => props.updatePage(4)}>4 <span className="sr-only">(current)</span></a>
		    </li>
		     <li className="page-item"><a className="page-link" onClick={() => props.updatePage(5)}>5</a></li>
		    <li className="page-item ">
		      <a className="page-link" onClick={() => props.updatePage(6)}>6 <span className="sr-only">(current)</span></a>
		    </li>
		     <li className="page-item"><a className="page-link" onClick={() => props.updatePage(7)}>7</a></li>
		    <li className="page-item ">
		      <a className="page-link" onClick={() => props.updatePage(8)}>8 <span className="sr-only">(current)</span></a>
		    </li>
		     <li className="page-item"><a className="page-link" onClick={() => props.updatePage(9)}>9</a></li>
		    <li className="page-item">
		      <a className="page-link" onClick={() => props.updatePage('+')}>Next</a>
		    </li>
		  </ul>
		</nav>
	);
}

export default PageNumbers;