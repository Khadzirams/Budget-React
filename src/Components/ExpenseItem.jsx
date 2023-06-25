import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../Context/AppContext';


const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    return (
        <li className='w-1/2 flex justify-between p-1 m-1 bg-slate-50 rounded'>
            <span className='pr-40'>{props.name}</span>
            <div className='flex justify-center'>
                <span className='bg-red-600 m-1 pr-2 pl-2 rounded text-white'>
                    {props.cost} Rands
                </span>
                <TiDelete size='1.5em' className='m-1' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem