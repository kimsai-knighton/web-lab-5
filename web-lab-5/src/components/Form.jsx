import { useState } from 'react';
function Form({ onAddExperiment, count }) {

	const [name, setName] = useState('');
	const [deadline, setDeadline] = useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
	
		onAddExperiment({ name, deadline });

		setDeadline('');
	};

	const day = new Date().getDate()
	const mth = new Date().getMonth()
	const year = new Date().getFullYear()

	const monthNames = [
		"января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
	];

	return (
	<div style={{ padding: '20px', fontFamily: 'Bahnschrift', color: 'black' }}>
    	
		<h6 style={{ fontSize: '14px', marginTop: '-10px', marginBottom: '-5px', color: 'gray' }}><center>{day} {monthNames[mth]} {year}</center></h6>
		
		<h2 style={{ fontSize: '20px', marginBottom: '15px', color: 'black' }}><center>Добавить новую задачу</center></h2>
      
    	<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="name">Название:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f3f3f3', color: 'black' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="discrpt">Описание:</label>
          <textarea 
            value={discrpt} 
            onChange={(e) => setDiscrpt(e.target.value)} 
            required 
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px', backgroundColor: '#f3f3f3', color: 'black', resize: "none" }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="imgUrl">Дата:</label>
			<input type="date" name="date" id="date-select" value={status} onChange={(e) => setStatus(e.target.value)} className="date-select" >
            </input>
        </div>

		

        <button type="submit" style={{
          backgroundColor: '#f3f3f3',
          color: 'black',
          padding: '10px',
          border: '2px solid #e1d4ba',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
		  fontFamily: 'Bahnschrift',
		  fontSize: '17px'
        }}>
          Добавить эксперимент
        </button>
      </form>
    </div>
  );
}

export default Form;