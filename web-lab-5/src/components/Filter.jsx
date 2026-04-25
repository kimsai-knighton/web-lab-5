import { useState, useEffect } from 'react';
function Filter({ onFilterChange }) {

	const handleChange = (e) => {
        onFilterChange(e.target.value);
    };

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
		backgroundColor: "#f9f0ec",
		margin: "5px",
		marginBottom: '15px'
	}}>
		
		<form className="filter-form">
            <label htmlFor="filter-select" className="filter-label">Показать: </label>
            <select name="filter" id="filter-select" className="filter-select" onChange={handleChange}>
                <option value="all">Все</option>
                <option value="future">В планах</option>
                <option value="now">В процессе</option>
                <option value="done">Завершён</option>
            </select>
        </form>

    </div>
  );
}

export default Filter;