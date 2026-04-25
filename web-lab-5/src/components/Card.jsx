import { useState, useEffect } from 'react';
function ExpCard({id, name, deadline}) {


	return (
    <div style={{
		border: '2px solid #1e1e1e',
		padding: '10px',
		display: 'flex',
		width: '550px',
		height: '20px',
		flexDirection: 'row',
		borderRadius: '8px',
		fontFamily: 'Bahnschrift',
		color: 'black',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: "#f9ecd7"
	}}>
		<h4 style={{ margin: 0 }}>{name}</h4>

		<p style={{margin: 0, textAlign: 'left'}}>{deadline}</p>
    </div>
  );
}

export default ExpCard;