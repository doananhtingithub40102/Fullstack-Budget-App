import { useRef } from "react"

const NavTabs = () => {
    const navTabs = useRef()

    function setBorderNavTabs(event) {
        if (event.target.textContent === "Expenditure") {
            navTabs.current.style = "border-bottom-color: #dc3545 !important"
        } else {
            navTabs.current.style = "border-bottom-color: #0d6efd !important"
        }
    }

    return (
        <>
            <ul className="nav nav-tabs" ref={navTabs}>
                <li className="nav-item">
                    <a className="nav-link active" onClick={setBorderNavTabs} data-bs-toggle="tab" href="#expenditure">Expenditure</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={setBorderNavTabs} data-bs-toggle="tab" href="#income">Income</a>
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
                                id="datetime"
                            />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-3">
                            <label htmlFor="jars" className="col-form-label">Financial Jar:</label>
                        </div>
                        <div className="col-sm-9">
                            <select className="form-select" id="jars">
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
                            <select className="form-select" id="categories">
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
                                id="amount"
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
                                id="description"
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
                                id="datetime"
                            />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-3">
                            <label htmlFor="categories" className="col-form-label">Category:</label>
                        </div>
                        <div className="col-sm-9">
                            <select className="form-select" id="categories">
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
                                id="amount"
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
                                id="description"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavTabs