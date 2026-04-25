import { useState } from 'react';
function Form({ onAddExperiment }) {

	const [name, setName] = useState('');
	const [deadline, setDeadline] = useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
	
		onAddExperiment({ name, deadline });
		setName('');
		setDeadline('');
	};

	const day = new Date().getDate()
	const mth = new Date().getMonth()
	const year = new Date().getFullYear()

	const monthNames = [
		"января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
	];

	return (
        <div style={{ padding: '10px',fontFamily: 'Bahnschrift', width: '530px'}}>
            <h6 style={{fontSize: '15px', color: 'gray', marginBottom: '-5px', textAlign: 'center' }}>
                {day} {monthNames[mth]} {year}
            </h6>
            <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Добавить новую задачу</h2>
          
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" placeholder="Название" value={name} onChange={(e) => setName(e.target.value)} required 
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ fontSize: '12px' }}>Дата дедлайна:</label>
                    <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required 
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>

                <button type="submit" style={{ backgroundColor: '#f3f3f3', padding: '10px', border: '2px solid #b8caa4', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Добавить задачу
                </button>
            </form>
        </div>
    );
}

export default Form;