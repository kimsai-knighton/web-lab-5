import { useState, useEffect } from 'react'
import './App.css'

import ExpCard from './components/Card'
import Form from './components/Form'
import Filter from './components/Filter'

function App() {
    const [experiments, setExperiments] = useState(() => {
        const savedData = localStorage.getItem('experiments_list');
        return savedData ? JSON.parse(savedData) : [
            {
				id: 1,
				name: "♥ Сдать ДЗ",
				deadline: "01.01.2000"
			},
			{
				id: 1,
				name: "♥ Сдать ЛАБУ",
				deadline: "01.01.2001"
			},

        ];
    });

    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        localStorage.setItem('experiments_list', JSON.stringify(experiments));
    }, [experiments]);

    const filteredExperiments = experiments.filter(exp => {
        if (filterStatus === 'all') return true;
        if (filterStatus === 'now') return exp.status === "В процессе ⌛";
        if (filterStatus === 'done') return exp.status === "Завершён ✅";
        if (filterStatus === 'future') return exp.status === "В планах 🕒";
        return true;
    });

    const addNewExperiment = (newExperiment) => {
        const ExpWithId = { ...newExperiment, id: Date.now() };
        setExperiments([...experiments, ExpWithId]);
    };

    const deleteExperiment = (id) => {
        setExperiments(experiments.filter(exp => exp.id !== id));
    };

	const count = experiments.filter(exp => exp.status === "Завершён ✅").length;

    return (
        <div className="my-app">
            <div>
                <div className="form">
					<Form onAddExperiment={addNewExperiment} count={count} />
                </div>
                <div className="filter">
                    <Filter onFilterChange={setFilterStatus} />
                </div>
            </div>

            <div className='experiments'>
                {filteredExperiments.map((experiment) => (
                    <ExpCard 
                        key={experiment.id}
                        id={experiment.id}
                        name={experiment.name} 
                        discrpt={experiment.discrpt} 
                        status={experiment.status}
                        onDelete={deleteExperiment}
                    />
                ))}
            </div>
        </div>
    )
}

export default App