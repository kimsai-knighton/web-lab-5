import { useState, useEffect } from 'react'
import './App.css'

import ExpCard from './components/Card'
import Form from './components/Form'
import Filter from './components/Filter'

function App() {
	const [experiments, setExperiments] = useState(() => {
			const savedData = localStorage.getItem('experiments_list');
			return savedData ? JSON.parse(savedData) : [];
	});

    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        localStorage.setItem('experiments_list', JSON.stringify(experiments));
    }, [experiments]);

	const filteredExperiments = experiments.filter(exp => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const expDate = new Date(exp.deadline);
        
        if (filterStatus === 'overdue') return expDate < today;
        if (filterStatus === 'week') {
            const nextWeek = new Date();
            nextWeek.setDate(today.getDate() + 7);
            return expDate >= today && expDate <= nextWeek;
        }
        return true;
    })

    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    const addNewExperiment = (newExperiment) => {
        const ExpWithId = { ...newExperiment, id: Date.now() };
        setExperiments([...experiments, ExpWithId]);
    };

	return (
        <div className="my-app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form onAddExperiment={addNewExperiment} />
            <Filter onFilterChange={setFilterStatus} />
            <div className='experiments'>
                {filteredExperiments.map((experiment) => (
                    <ExpCard 
                        key={experiment.id}
                        {...experiment}
                    />
                ))}
            </div>
        </div>
    )
}

export default App