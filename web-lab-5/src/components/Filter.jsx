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
		backgroundColor: "#f3f3f3",
		margin: "15px",
		marginBottom: '25px'
	}}>
		
		<form className="filter-form">
            <label htmlFor="filter-select" className="filter-label">Показать: </label>
			<select onChange={handleChange} className="filter-select">
				<option value="all">Все задания</option>
				<option value="week">На этой неделе</option>
				<option value="overdue">Просроченные</option>
			</select>
        </form>

    </div>
  );
}

export default Filter;