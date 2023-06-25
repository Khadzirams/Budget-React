import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../Context/AppContext';

const AddExpenseForm = () => {

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const { dispatch } = useContext(AppContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })

        setName('');
        setCost('')

    }

    const btnDis = name== '' || cost == '' ? 'disabled' : '';

  return (
    <>
            <div className="w-full grid justify-items-center mt-1">
            <form onSubmit={onSubmit} className="w-1/2 bg-slate-50 rounded px-8 pt-6 pb-8 mb-4 flex flex-row">
                <div className="mb-4 text-left m-5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>
                        Name
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="New Expense" />
                </div>
                <div className="mb-6 text-left m-5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cost">
                        Cost (Rands)
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={cost} onChange={(e) => setCost(e.target.value)} id="cost" type="number" placeholder="ZAR" />
                </div>
                <div className="flex items-center justify-between m-5">
                    <button className='bg-lime-600 border-line-400  cursor-pointer hover:bg-White text-white font-bold py-2 px-12 mt-3 rounded focus:outline-none focus:shadow-outline' type="submit" disabled={btnDis}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default AddExpenseForm;
