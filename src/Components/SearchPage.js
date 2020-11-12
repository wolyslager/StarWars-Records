import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const SearchPage = (props) => {

  return (
  	<div>
	    <InputGroup className="mb-3">
	    <FormControl
	      placeholder="Search Character"
	      aria-label="Recipient's username"
	      aria-describedby="basic-addon2"
	      onChange={props.handleChange}
	    />
	    <InputGroup.Append>
	      <Button variant="outline-secondary" onClick={() => props.handleSubmit()}>Search</Button>
	    </InputGroup.Append>
	  </InputGroup>
  </div>
  );
}

export default SearchPage;