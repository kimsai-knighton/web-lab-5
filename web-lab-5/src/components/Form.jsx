import { useState } from 'react';
function Form({ onAddExperiment, count }) {

	const [name, setName] = useState('');
	const [discrpt, setDiscrpt] = useState('');
	const [status, setStatus] = useState('future');

	const handleSubmit = (e) => {
		e.preventDefault();
	
		const statusWithEmoji = 
			status === 'now' ? "В процессе ⌛" : 
			status === 'done' ? "Завершён ✅" : "В планах 🕒";
	
		onAddExperiment({ name, discrpt, status: statusWithEmoji });

		setName('');
		setDiscrpt('');
		setStatus('future');
	};



	return (
	<div style={{ padding: '20px', fontFamily: 'Bahnschrift', color: 'black' }}>
    	
		<h6 style={{ fontSize: '14px', marginTop: '-10px', marginBottom: '-5px', color: 'gray' }}><center>количество выполненных: {count}</center></h6>
		
		<h2 style={{ fontSize: '20px', marginBottom: '15px', color: 'black' }}><center>Добавить новый эксперимент</center></h2>
      
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
          <label htmlFor="imgUrl">Статус:</label>
			<select name="filter" id="filter-select" value={status} onChange={(e) => setStatus(e.target.value)} className="filter-select" >
                <option value="future">В планах</option>
                <option value="now">В процессе</option>
                <option value="done">Завершён</option>
            </select>
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