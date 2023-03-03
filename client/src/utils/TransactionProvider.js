import { createContext, useState, useContext, useEffect } from "react"
import transactionData from "./transactionData"
import { AccountContext } from "./AccountProvider"

const TransactionContext = createContext()

function getTransactionsByAccountId(account_id) {
    const transactions = transactionData.filter((transaction) => transaction.account_id === account_id)
    return transactions
}

const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
    const { currentAccountId } = useContext(AccountContext)

    useEffect(() => {
        const transactions = getTransactionsByAccountId(currentAccountId)
        setTransactions(transactions)
    }, [currentAccountId])

    return (
        <TransactionContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export { TransactionProvider, TransactionContext }