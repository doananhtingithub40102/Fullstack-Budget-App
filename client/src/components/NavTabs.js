import { useRef } from "react"
import { getCategories, getDefaultCategoryValue } from "../utils/categories"
import { getCurrentDateTime } from "../utils/datetime"
import { defaultExpenditureForm, defaultIncomeForm, handleErrorOfDatetime, handleErrorOfAmount, handleErrorOfDescription, clearErrors } from "../utils/form"

const NavTabs = ({ form, setForm }) => {
    const navTabs = useRef()

    function handleToggleTabs(event) {
        if (event.target.textContent === "Expenditure") {
            navTabs.current.style = "border-bottom-color: #dc3545 !important"
            setForm({ ...defaultExpenditureForm, datetime: getCurrentDateTime() })
            clearErrors(0)
        } else {
            navTabs.current.style = "border-bottom-color: #0d6efd !important"
            setForm({ ...defaultIncomeForm, datetime: getCurrentDateTime() })
            clearErrors(1)
        }
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        if (name === "jar") {
            setForm((preForm) => ({ ...preForm, jar: value, category: getDefaultCategoryValue(value) }))
        } else {
            setForm((preForm) => ({ ...preForm, [name]: value }))
        }
    }

    return (
        <>
            <ul className="nav nav-tabs" ref={navTabs}>
                <li className="nav-item">
                    <a className="nav-link active" onClick={handleToggleTabs} data-bs-toggle="tab" href="#expenditure">Expenditure</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={handleToggleTabs} data-bs-toggle="tab" href="#income">Income</a>
                </li>
            </ul>

            <div className="tab-content">
                {/* tab-pane 1 */}
                <div className="tab-pane text-danger active" id="expenditure">
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
                                onBlur={() => handleErrorOfDatetime(form.datetime, 0)}
                                id="datetime"
                            />
                            <span className="text-danger errDatetime"></span>
                        </div>
                    </div>
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
                                onBlur={() => handleErrorOfAmount(form.amount, 0)}
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
                                onBlur={() => handleErrorOfDescription(form.description, 0)}
                                id="description"
                                placeholder="Describe your transaction"
                            />
                            <span className="text-danger errDescription"></span>
                        </div>
                    </div>
                </div>

                {/* tab-pane 2 */}
                <div className="tab-pane text-primary fade" id="income">
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
                                onBlur={() => handleErrorOfDatetime(form.datetime, 1)}
                                id="datetime"
                            />
                            <span className="text-danger errDatetime"></span>
                        </div>
                    </div>
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
                                onBlur={() => handleErrorOfAmount(form.amount, 1)}
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
                                onBlur={() => handleErrorOfDescription(form.description, 1)}
                                id="description"
                                placeholder="Describe your transaction"
                            />
                            <span className="text-danger errDescription"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavTabs