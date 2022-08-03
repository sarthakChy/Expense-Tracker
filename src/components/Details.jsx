import React from 'react'
import {Card, CardContent, CardHeader, Typography} from '@material-ui/core';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import './Details.css';
import useTransaction from '../useTransactions';

const Details = ({type}) => {


  const {total, chartData} = useTransaction(type);
  
  return (
    <div>
        <Card className='detail-card'> 
            <CardHeader title={type} className= {type}/>
            <CardContent className='content-container'>
              <Typography>{`Total ${total}`}</Typography>
              <div className='chart'>
                <Doughnut 
                  data={chartData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}/>
              </div>
              
            </CardContent>
        </Card>

    </div>
  )
}

export default Details