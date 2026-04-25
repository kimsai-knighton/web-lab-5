import { useState, useEffect } from 'react';
function ExpCard({id, name, deadline}) {

	const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isOver = new Date(deadline) < today;

	return (
    <div style={{
		border: isOver ? '3px solid #ff4d4d' : '2px solid #1e1e1e',
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
		backgroundColor: "#92b46c",
		color: isOver ? '#ffd9d9' : 'white'
	}}>
		<h4 style={{ margin: 0 }}>{name}</h4>

		<p style={{margin: 0, textAlign: 'left'}}>{new Date(deadline).toLocaleDateString('ru-RU')}</p>
    </div>
  );
}

export default ExpCard;