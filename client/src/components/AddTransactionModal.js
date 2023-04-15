import { useState, useEffect, useContext } from "react"
import NavTabs from "./NavTabs"
import { TransactionContext } from "../utils/TransactionProvider"
import { getCurrentDateTime } from "../utils/datetime"
import { defaultExpenditureForm, checkForm, clearErrors } from "../utils/form"

import bootstrap from "bootstrap/dist/js/bootstrap.min"

const AddTransactionModal = ({ isOpen, onClose, onSubmit }) => {
    const [form, setForm] = useState(defaultExpenditureForm)
    const { transactions } = useContext(TransactionContext)

    useEffect(() => {
        if (isOpen === true) {
            setForm({ ...defaultExpenditureForm, datetime: getCurrentDateTime() })
            clearErrors(0)

            const triggerExpendTabs = document.querySelector(".nav-tabs a[href='#expenditure']")
            bootstrap.Tab.getInstance(triggerExpendTabs).show()
            document.querySelector(".nav-tabs").style = "border-bottom-color: #dc3545 !important"
        }
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault()

        if (checkForm(form, form.type === "expenditure" ? 0 : 1)) {
            const account_id = transactions[0].account_id
            let prev_id = ""

            if (account_id === "A0001") {
                prev_id = transactions[0]._id
            } else {

            }
            const new_id = "T" + (parseInt(prev_id.substring(1)) + 1).toString().padStart(8, "0")

            const transaction = {
                _id: new_id,
                datetime: form.datetime,
                type: form.type,
                description: form.description,
                amount: parseInt(form.amount),
                account_id: account_id,
                category_id: form.category
            }
            onSubmit(transaction)

            onClose()
        }
    }

    return (
        <>
            <div
                className={`modal fade ${isOpen ? "show" : ""}`}
                style={{ display: isOpen ? "block" : "none" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">New Transaction</h4>
                                <button type="button" className="btn-close" onClick={onClose}></button>
                            </div>
                            <div className="modal-body">
                                <NavTabs form={form} setForm={setForm} />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-dark">Add Transaction</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {isOpen && <div className="modal-backdrop show"></div>}
        </>
    )
}

export default AddTransactionModal