import { useRef, useState } from "react"

const NavTabs = () => {
    const navTabs = useRef()
    const [form, setForm] = useState({})

    function handleToggleTabs(event) {
        if (event.target.textContent === "Expenditure") {
            navTabs.current.style = "border-bottom-color: #dc3545 !important"
        } else {
            navTabs.current.style = "border-bottom-color: #0d6efd !important"
        }
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm((preForm) => ({ ...preForm, [name]: value }))
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
                                value={form.datetime || ""}
                                onChange={handleChange}
                                id="datetime"
                            />
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
                                value={form.jar || "necessaries"}
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
                                value={form.category || "eat_drink"}
                                onChange={handleChange}
                                id="categories"
                            >
                                <option value="eat_drink">Eat & Drink</option>
                            </select>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-3">
                            <label htmlFor="amount" className="col-form-label">Amount:</label>
                        </div>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                className="form-control"
                                name="amount"
                                value={form.amount || ""}
                                onChange={handleChange}
                                id="amount"
                                placeholder="Amount of Money"
                            />
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
                                value={form.description || ""}
                                onChange={handleChange}
                                id="description"
                                placeholder="Description about your transaction"
                            />
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
                                value={form.datetime || ""}
                                onChange={handleChange}
                                id="datetime"
                            />
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
                                value={form.category || "part-time"}
                                onChange={handleChange}
                                id="categories"
                            >
                                <option value="part-time">Part-time</option>
                                <option value="full-time">Full-time</option>
                                <option value="bonus">Bonus</option>
                            </select>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-3">
                            <label htmlFor="amount" className="col-form-label">Amount:</label>
                        </div>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                className="form-control"
                                name="amount"
                                value={form.amount || ""}
                                onChange={handleChange}
                                id="amount"
                                placeholder="Amount of Money"
                            />
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
                                value={form.description || ""}
                                onChange={handleChange}
                                id="description"
                                placeholder="Description about your transaction"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavTabs