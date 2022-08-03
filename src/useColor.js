
const useColor = (type)=>{

    switch (type) {
        case 'Income':
            const colorIncome = [
                '#9ef890',
                '#81f66e',
                '#63f44c',
                '#46f22a',
                '#2cec0d',
                '#26ca0b',
                '#1fa809',
                '#198607',
                '#136505',
                '#0c4303'
            ]
            return colorIncome ;
        case 'Expenses':
            const colorExpenses = [
                '#fb8f8d',
                '#fa6c6a',
                '#f94a47',
                '#f82824',
                '#f20b07',
                '#d00906',
                '#ad0805',
                '#8a0604',
                '#680403',
                '#450302'
            ]
            return colorExpenses;
        case 'Investments':
            const colorInvestments = [
                '#a0bee8',
                '#83abe1',
                '#6697da',
                '#4984d3',
                '#3071c9',
                '#2960ac',
                '#22508f',
                '#1b4073',
                '#143056',
                '#0d2039'
            ]
            return colorInvestments;
        default:
            return [];
    }

}

export default useColor