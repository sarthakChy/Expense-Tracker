import React from 'react';
import {List as MUIList, ListItem, ListItemAvatar, Avatar, Slide, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import './List.css';
import useStyles from './styles';

const List = ({transactions, setTransactions}) => {

    const classes = useStyles()

  return (
    <MUIList dense={false} className='list'>
        {transactions.map((transaction)=> (

            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type==='Income'? classes.avatarIncome : transaction.type==='Expenses'? classes.avatarExpenses : classes.avatarInvestments}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.reason} secondary={transaction.amount}/>
                    <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='delete' onClick={()=>{
            
                            setTransactions(transactions.filter((t)=> t.id !== transaction.id))
                            
                        }} >
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>

            </Slide>
        
        ))}
    </MUIList>
  )
}

export default List