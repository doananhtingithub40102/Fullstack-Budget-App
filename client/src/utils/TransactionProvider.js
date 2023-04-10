import { createContext, useState, useContext, useEffect } from "react"
import transactionData from "./transactionData"
import { AccountContext } from "./AccountProvider"

const TransactionContext = createContext()

function getTransactionsByAccountId(transactionDB, account_id) {
    const transactions = transactionDB.filter((transaction) => transaction.account_id === account_id)
    return transactions
}

function getTransactionsByMonthYear(transactionData, month, year) {
    // Get transactions with the same transaction month and year
    const transactions = transactionData.filter((transaction) => {
        const splitted_datetime = transaction.datetime.split("-")
        const transaction_year = splitted_datetime[0]
        const transaction_month = splitted_datetime[1]

        return (transaction_month === month && transaction_year === year)
    })


    /* Group and sort transactions with the same transaction date */
    // Grouped transactions
    const groupedTransactions = transactions.reduce((acc, transaction) => {
        const splitted_datetime = transaction.datetime.split("-")
        const transaction_date = splitted_datetime[2].slice(0, 2)

        if (!acc[transaction_date]) {
            acc[transaction_date] = []
        }
        acc[transaction_date].push(transaction)

        return acc
    }, {})
    // Sorted transactions
    const sortedTransactions = {}

    Object.keys(groupedTransactions).reverse().forEach((key, index) => {
        sortedTransactions[index] = groupedTransactions[key]
    })
    
    
    // Get final transactions
    return Object.values(sortedTransactions)
}

const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
    const { currentAccountId } = useContext(AccountContext)

    useEffect(() => {
        const transactions = getTransactionsByAccountId(transactionData, currentAccountId)
        setTransactions(transactions)
    }, [currentAccountId])

    return (
        <TransactionContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export { TransactionProvider, TransactionContext, getTransactionsByMonthYear }