import { useState } from "react"
import { getCategories, getDefaultCategoryValue, getJarName } from "../utils/categories"
import { checkForm, handleErrorOfDatetime, handleErrorOfAmount, handleErrorOfDescription } from "../utils/form"

function loadFormFromTransaction(transaction) {
    const form = {
        type: transaction.type,
        datetime: transaction.datetime,
        jar: getJarName(transaction.category_id),
        category: transaction.category_id,
        amount: transaction.amount.toString(),
        description: transaction.description
    }

    return form
}

const TransactionDetailsModal = ({ transaction, onClose, onDelete, onEdit }) => {
    const [form, setForm] = useState(loadFormFromTransaction(transaction))

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        if (name === "jar") {
            setForm((preForm) => ({ ...preForm, jar: value, category: getDefaultCategoryValue(value) }))
        } else {
            setForm((preForm) => ({ ...preForm, [name]: value }))
        }
    }

    function handleDelete() {
        if (onDelete(transaction._id)) {
            onClose()
        }
    }

    function handleEdit() {
        if (checkForm(form, 2)) {
            if (onEdit(transaction._id, form)) {
                onClose()
            }
        }
    }

    return (
        <>
            <div
                className="modal fade show"
                style={{ display: "block" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Transaction Details</h4>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <div className={`${form.type === "expenditure" ? "text-danger" : "text-primary"}`}>
                                <div className="row my-3">
                                    <div className="col-sm-3">
                                        <label htmlFor="datetime" className="col-form-label">Datetime:</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            name="datetime"
                                            value={form.datetime}
                                            onChange={handleChange}
                                            onBlur={() => handleErrorOfDatetime(form.datetime, 2)}
                                            id="datetime"
                                        />
                                        <span className="text-danger errDatetime"></span>
                                    </div>
                                </div>
                                {form.jar && (
                                    <div className="row my-3">
                                        <div className="col-sm-3">
                                            <label htmlFor="jars" className="col-form-label">Financial Jar:</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <select
                                                className="form-select"
                                                name="jar"
                                                value={form.jar}
                                                onChange={handleChange}
                                                id="jars"
                                            >
                                                <option value="necessaries">The Necessaries Account</option>
                                                <option value="freedom">Financial Freedom Account</option>
                                                <option value="saving">Long-term Saving Account</option>
                                                <option value="education">Education Account</option>
                                                <option value="playing">Play Account</option>
                                                <option value="giving">Give Account</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                                <div className="row my-3">
                                    <div className="col-sm-3">
                                        <label htmlFor="categories" className="col-form-label">Category:</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select"
                                            name="category"
                                            value={form.category}
                                            onChange={handleChange}
                                            id="categories"
                                        >
                                            {getCategories(form.jar).map((category, index) => (
                                                <option key={index} value={category.value}>{category.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-3">
                                        <label htmlFor="amount" className="col-form-label">Amount:</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="amount"
                                            value={form.amount}
                                            onChange={handleChange}
                                            onBlur={() => handleErrorOfAmount(form.amount, 2)}
                                            id="amount"
                                            placeholder="Amount of Money"
                                        />
                                        <span className="text-danger errAmount"></span>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-3">
                                        <label htmlFor="description" className="col-form-label">Description:</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="description"
                                            value={form.description}
                                            onChange={handleChange}
                                            onBlur={() => handleErrorOfDescription(form.description, 2)}
                                            id="description"
                                            placeholder="Describe your transaction"
                                        />
                                        <span className="text-danger errDescription"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>
                                Delete
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleEdit}
                                disabled={JSON.stringify(form) === JSON.stringify(loadFormFromTransaction(transaction))}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop show"></div>
        </>
    )
}

export default TransactionDetailsModal