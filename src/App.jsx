import './App.css'
import Budget from './Components/Budget'
import Remaining from './Components/Remaining'
import ExpenseList from './Components/ExpenseList'
import AddExpenseForm from './Components/AddExpenseForm'
import Spent from './Components/Spent'
import Gif from './Components/Gif'
import { AppProvider } from './Context/AppContext'




function App() {
  return (
    <>
    <AppProvider>
    <div className="App ">
      <div className='flex justify-center'>
        <Budget/>
        <Remaining/>
        <Spent/>
      </div>
      <ExpenseList/>
      <AddExpenseForm/>
    </div>
    <div>
      <Gif/>
    </div>
    </AppProvider>
    </>
  )
}

export default App

