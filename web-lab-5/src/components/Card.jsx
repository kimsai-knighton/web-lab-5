import { useState, useEffect } from 'react';
function ExpCard({id, name, discrpt, status, onDelete}) {


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
		<p style={{ margin: 0, textAlign: 'left'}}>{discrpt}</p>

		<button 
                onClick={() => onDelete(id)} 
                style={{
					backgroundColor: "#ffffff00",
                    border: 'none',
                    cursor: 'pointer',
                }}
            >❌
        </button>

		<p style={{margin: 0, textAlign: 'left'}}>{status}</p>

    </div>
  );
}

export default ExpCard;