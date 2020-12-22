import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
	return ( 
		<div>
		     <Spinner style={{width:"10rem", height:"10rem"}} animation="border" role="status" variant="light">
		     
			</Spinner>
		</div>
    )
}

export default Loading;
  