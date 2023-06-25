import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const {expenses} = useContext (AppContext);

    return (
            
            <ul className='w-full grid justify-items-center'>
                <h1 className='font-semibold'>EXPENSES LIST</h1>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
    )
}

export default ExpenseList