import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className="w-80 bg-lime-600 border-line-400 text-white px-4 py-3 m-2 rounded relative" role="alert">
            <strong className="font-bold">Budget: </strong>
            <span className="block sm:inline">{budget} Rands</span>
        </div>
    )
}

export default Budget