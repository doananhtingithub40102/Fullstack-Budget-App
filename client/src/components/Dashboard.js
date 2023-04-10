import { useState, useContext, useEffect } from "react"
import Modal from "./Modal"
import { TransactionContext, getTransactionsByMonthYear } from "../utils/TransactionProvider"
import { formatMoney, sumMoney } from "../utils/money"
import { getCategoryNameById } from "../utils/categories"
import { getCurrentMonthYear, getMonthName, getWeekDay, getBgForWeekDay } from "../utils/datetime"
import { FcPrevious, FcNext, FcAddDatabase } from "react-icons/fc"

const Transaction = ({ transaction }) => {
    return (
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

const TransactionsInDay = ({ transactions }) => {
    return (
        <div className="transactions_in_day px-3 pb-2">
            <HeaderOfTransaction transaction={transactions} />
            <div>
                {transactions.map((transaction) => {
                    return <Transaction key={transaction._id} transaction={transaction} />
                })}
            </div>
        </div>
    )
}

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false)
    const { transactions, setTransactions } = useContext(TransactionContext)
    const [monthYear, setMonthYear] = useState({})

    useEffect(() => {
        const [month, year] = getCurrentMonthYear()

        setMonthYear({
            month: month,
            year: year
        })
    }, [])

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

    return (
        <main className="border-top pb-2 position-relative">
            <div className="mx-2 mt-2">
                <button
                    type="button"
                    className="btn"
                    style={{ padding: "0 0 10px 0" }}
                >
                    <FcPrevious />
                </button>
                <span className="text-light">{getMonthName(monthYear.month)} {monthYear.year}</span>
                <button
                    type="button"
                    className="btn"
                    style={{ padding: "0 0 10px 0" }}
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
                                <TransactionsInDay transactions={transactions} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>


            <button
                type="button"
                className="btn btn-primary rounded-circle border-white position-fixed px-2 pt-0 pb-1 fs-4"
                id="transactionButton"
                onClick={() => setShowModal(true)}
            >
                <FcAddDatabase />
            </button>

            <Modal modal={{ showModal: showModal, setShowModal: setShowModal }} />


        </main>
    )
}

export default Dashboard