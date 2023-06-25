import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Remaining = () => {

    const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

    const alertType = totalExpenses > budget ? 'bg-lime-600 border-line-400 text-white' : 'bg-lime-600 border-none border-line-400 text-white';


    return (
        <div className={`w-80 border  px-4 py-3 m-2 rounded relative ${alertType}`} role="alert">
            <strong className="font-bold">Remaining: </strong>
            <span className="block sm:inline">{budget - totalExpenses} Rands</span>
        </div>
    )
}

export default Remaining