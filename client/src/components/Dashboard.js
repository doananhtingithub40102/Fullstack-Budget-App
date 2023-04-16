import { useState, useContext, useEffect } from "react"
import AddTransactionModal from "./AddTransactionModal"
import TransactionDetailsModal from "./TransactionDetailsModal"
import { TransactionContext, getTransactionsByMonthYear } from "../utils/TransactionProvider"
import { formatMoney, sumMoney } from "../utils/money"
import { getCategoryNameById } from "../utils/categories"
import { getCurrentMonthYear, getMonthName, getWeekDay, getBgForWeekDay } from "../utils/datetime"
import { FcPrevious, FcNext, FcAddDatabase } from "react-icons/fc"

const Transaction = ({ transaction, onClick }) => {
    return (
        <div className="transaction" onClick={() => onClick(transaction)}>
            <div className="row my-2">
                <div className="col-sm-4">
                    <span className="text-white-50">{getCategoryNameById(transaction.category_id)}</span>
                </div>
                <div className="col-sm-4">
                    <span className="text-white">{transaction.description}</span>
                </div>
                <div className="col-sm-4 text-end">
                    <span className="text-info">
                        {transaction.type === "income" && formatMoney(transaction.amount, "₫")}
                    </span>
                    <span className="text-danger">
                        {transaction.type === "expenditure" && formatMoney(transaction.amount, "₫")}
                    </span>
                </div>
            </div>
        </div>
    )
}

const HeaderOfTransaction = ({ transaction }) => {
    return (
        <div className="row mt-1 mb-2 py-2">
            <div className="col-sm-6">
                <span className={`badge ${getBgForWeekDay(getWeekDay(transaction[0].datetime))} me-2`}>{getWeekDay(transaction[0].datetime)}</span>
                <span>
                    <span className="text-white-50">{getMonthName(transaction[0].datetime.split("-")[1])}</span> &nbsp;
                    <span className="fs-5 text-white">{transaction[0].datetime.split("-")[2].slice(0, 2)}</span>
                </span>
            </div>
            <div className="col-sm-6 text-end">
                <div>
                    <span className="text-info">{formatMoney(sumMoney(transaction, false), "₫")}</span> &nbsp;
                    <span className="text-danger">{formatMoney(sumMoney(transaction), "₫")}</span>
                </div>
            </div>
        </div>
    )
}

const TransactionsInDay = ({ transactions, onClick }) => {
    return (
        <div className="transactions_in_day px-3 pb-2">
            <HeaderOfTransaction transaction={transactions} />
            <div>
                {transactions.map((transaction) => {
                    return (
                        <Transaction
                            key={transaction._id}
                            transaction={transaction}
                            onClick={onClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const Dashboard = () => {
    const [showAddingModal, setShowAddingModal] = useState(false)
    const { transactions, setTransactions } = useContext(TransactionContext)
    const [monthYear, setMonthYear] = useState({})

    const [showDisplayModal, setShowDisplayModal] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState(null)

    useEffect(() => {
        const [month, year] = getCurrentMonthYear()

        setMonthYear({
            month: month,
            year: year
        })
    }, [])

    function handlePaginationClick(direction) {
        const month = parseInt(monthYear.month)
        const year = parseInt(monthYear.year)
        let newMonth = (direction === "prev" ? month - 1 : month + 1)
        let newYear = year

        if (newMonth < 1) {
            newMonth = 12
            newYear -= 1
        } else if (newMonth > 12) {
            newMonth = 1
            newYear += 1
        }

        setMonthYear({
            month: String(newMonth).padStart(2, "0"),
            year: String(newYear)
        })
    }

    function handlePrevClick() {
        handlePaginationClick("prev")
    }

    function handleNextClick() {
        handlePaginationClick("next")
    }

    function getTransactionPairs(transactions) {
        return transactions.reduce((pairs, transaction, index) => {
            if (index % 2 === 0) {
                pairs.push([transaction])
            } else {
                pairs[pairs.length - 1].push(transaction)
            }

            return pairs
        }, [])
    }

    function handleAddTransaction(transaction) {
        setTransactions((prevState) => [transaction, ...prevState]);
    }

    function handleTransactionClick(transaction) {
        setSelectedTransaction(transaction)
        setShowDisplayModal(true)
    }

    function handleDeleteTransaction(transaction_id) {
        const confirmDelete = window.confirm('Are you sure you want to delete this transaction?')
        if (confirmDelete) {
            const new_transactions = transactions.filter((transaction) => transaction._id !== transaction_id)
            setTransactions(new_transactions)
        }

        return confirmDelete
    }

    function handleEditTransaction(transaction_id, form) {
        const confirmEdit = window.confirm('You want to save this edition?')
        if (confirmEdit) {
            // Find the index of the transaction that you want to edit with the given transaction_id
            const index = transactions.findIndex((transaction) => transaction._id === transaction_id)

            // Create a new transaction with edited formfields
            const editedTransaction = { ...transactions[index], datetime: form.datetime, description: form.description, amount: parseInt(form.amount), category_id: form.category }

            // Create a new transactions array with the edited transaction
            const editedTransactions = [
                ...transactions.slice(0, index),
                editedTransaction,
                ...transactions.slice(index + 1)
            ]

            setTransactions(editedTransactions)
        }

        return confirmEdit
    }

    return (
        <main className="border-top pb-2 position-relative">
            <div className="mx-2 mt-2">
                <button
                    type="button"
                    className="btn"
                    style={{ padding: "0 0 10px 0" }}
                    onClick={handlePrevClick}
                >
                    <FcPrevious />
                </button>
                <span className="text-light monthYear">{getMonthName(monthYear.month)} {monthYear.year}</span>
                <button
                    type="button"
                    className="btn"
                    style={{ padding: "0 0 10px 0" }}
                    onClick={handleNextClick}
                >
                    <FcNext />
                </button>
            </div>
            <div className="row border-bottom">
                <div className="col-md-6 d-flex justify-content-between px-4">
                    <div className="text-white">
                        <div>Aggregate income</div>
                        <span className="text-info">{formatMoney(sumMoney([].concat(...getTransactionsByMonthYear(transactions, monthYear.month, monthYear.year)), false), "₫")}</span>
                    </div>
                    <div className="text-white">
                        <div>Aggregate expenditure</div>
                        <span className="text-danger">{formatMoney(sumMoney([].concat(...getTransactionsByMonthYear(transactions, monthYear.month, monthYear.year))), "₫")}</span>
                    </div>
                    <div className="text-white">
                        <div>Balance</div>
                        <span className="text-white-50">{formatMoney(sumMoney([].concat(...getTransactionsByMonthYear(transactions, monthYear.month, monthYear.year)), false) - sumMoney([].concat(...getTransactionsByMonthYear(transactions, monthYear.month, monthYear.year))), "₫")}</span>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-white duration" href="/">Daily</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 duration" href="/">Date</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 duration" href="/">Week</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 duration" href="/">Month</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="transactions">
                {getTransactionPairs(getTransactionsByMonthYear(transactions, monthYear.month, monthYear.year)).map((pair, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {pair.map((transactions, colIndex) => (
                            <div className="col-md-6" key={colIndex}>
                                <TransactionsInDay
                                    transactions={transactions}
                                    onClick={handleTransactionClick}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>


            <button
                type="button"
                className="btn btn-primary rounded-circle border-white position-fixed px-2 pt-0 pb-1 fs-4"
                id="transactionButton"
                onClick={() => setShowAddingModal(true)}
            >
                <FcAddDatabase />
            </button>

            <AddTransactionModal
                isOpen={showAddingModal}
                onClose={() => setShowAddingModal(false)}
                onSubmit={handleAddTransaction}
            />


            {showDisplayModal && (
                <TransactionDetailsModal
                    transaction={selectedTransaction}
                    onClose={() => setShowDisplayModal(false)}
                    onDelete={handleDeleteTransaction}
                    onEdit={handleEditTransaction}
                />
            )}
        </main>
    )
}

export default Dashboard