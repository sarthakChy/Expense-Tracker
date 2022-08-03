import React, {createContext} from 'react'

export const transactionsContext = createContext();

export const Provider = ({children})=>{
    <transactionsContext.Provider value={'heyoo context'}>
        {children}
    </transactionsContext.Provider>
}