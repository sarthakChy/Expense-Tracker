import React, { useState, useContext} from 'react';
import {Card, CardContent, CardHeader, FormControl, InputAdornment, InputLabel, OutlinedInput, FormHelperText, Select, MenuItem, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Main.css';
import List from './List';
import { transactionContext } from '../App';

const Main = () => {
 
    const [amount, setAmount] = useState();
    const [reason, setReason] = useState('');
    const [type, setType] = useState('');
    const [id, setId] = useState(1);
    const [transactions, setTransactions] = useContext(transactionContext)
    
    const addTransactions = () =>{

        setId((prev)=> prev + 1)
        setTransactions([{id,amount,reason,type}, ...transactions])
        console.log(transactions)
        
    }
  return (
    <div className='main'>
        <Card className='card'>
            <CardHeader title='Expense Tracker'/>
            <CardContent className='card-content'>
                <div className='forms'>
                    <FormControl variant="outlined" className='form-amount'>
                        <FormHelperText id="outlined-weight-helper-text">Amount</FormHelperText>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={amount}
                            onChange={(e)=>setAmount(e.target.value)}
                            endAdornment={<InputAdornment position="end">$</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'amount',
                            }}
                        />
                    </FormControl>
                    <br/>
                    <FormControl sx={{ m: 1, minWidth: 500 }}>
                        <InputLabel>Category</InputLabel>
                        <Select value={type} onChange={((e)=> setType(e.target.value))}>
                            <MenuItem value='Income'>Income</MenuItem>
                            <MenuItem value='Expenses'>Expenses</MenuItem>
                            <MenuItem value='Investments'>Investments</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl varient='outlined'>
                        <FormHelperText id="outlined-weight-helper-text">Reason</FormHelperText>
                        <OutlinedInput
                                id="outlined-reason"
                                value={reason}
                                onChange={(e)=>setReason(e.target.value)}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                'aria-label': 'reason',
                                }}
                            />
                        
                    </FormControl>
                    <br/>
                    <Button endIcon={<AddIcon/>} onClick={()=> addTransactions()}>
                        Create
                    </Button>
                </div>
                <br/>
                <List transactions={transactions} setTransactions={setTransactions}/>
            </CardContent>
        </Card>

    </div>
  )
}

export default Main