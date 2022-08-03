
import { useContext } from "react"
import { transactionContext } from "./App"
import useColor from "./useColor";

const useTransaction = (type)=>{

    const color = useColor(type)
    const transactionDetails = useContext(transactionContext);
    const transactionPerType = transactionDetails[0].filter((t)=> t.type===type)
    const total = transactionPerType.reduce((acc,currval)=> acc += parseInt(currval.amount), 0)

    const chartData = {
        labels:transactionPerType.map((eachTransactionPerType)=> eachTransactionPerType.reason),
        datasets:[{
            data:transactionPerType.map((eachTransactionPerType)=> eachTransactionPerType.amount),
            backgroundColor: color,
              borderColor: color,
              borderWidth: 1

        }]
    }

    console.log({total, transactionPerType})

    return {total, chartData}
}

export default useTransaction