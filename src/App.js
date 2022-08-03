import React, {createContext, useState} from 'react'
import Details from './components/Details'
import Main from './components/Main'
import './App.css'

export const transactionContext = createContext(null)

const App = () => {

  const  transactionState = useState([]);

  return (
    <transactionContext.Provider value={transactionState}>
      <div className='app-container'> 
        <Main/>
        <div className='details-container'>
          <Details type={'Income'}/>
          <Details type={'Expenses'}/>
          <Details type={'Investments'}/>
        </div>       
        
      </div>
    </transactionContext.Provider>
    
  )
}

export default App