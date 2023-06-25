import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Spent = () => {

    const { expenses } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className="w-80 bg-red-600 border border-red-600 text-white px-4 py-3 m-2 rounded relative" role="alert">
            <strong className="font-bold">Spent: </strong>
            <span className="block sm:inline">{totalExpenses} Rands</span>
        </div>
    )
}

export default Spent