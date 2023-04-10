import { useState, useEffect } from "react"
import NavTabs from "./NavTabs"
import { getCurrentDateTime } from "../utils/datetime"
import { defaultExpenditureForm, checkForm, clearErrors } from "../utils/form"

import bootstrap from "bootstrap/dist/js/bootstrap.min"

const Modal = ({ modal }) => {
    const [formfields, setFormfields] = useState(defaultExpenditureForm)

    useEffect(() => {
        if (modal.showModal === true) {
            setFormfields({ ...defaultExpenditureForm, datetime: getCurrentDateTime() })
            clearErrors(0)

            const triggerExpendTabs = document.querySelector(".nav-tabs a[href='#expenditure']")
            bootstrap.Tab.getInstance(triggerExpendTabs).show()
            document.querySelector(".nav-tabs").style = "border-bottom-color: #dc3545 !important"
        }
    }, [modal.showModal])

    function handleSubmit(event) {
        event.preventDefault()

        // console.log(formfields)
        if (checkForm(formfields, formfields.type === "expenditure" ? 0 : 1)) {
            modal.setShowModal(false)
        }
    }

    return (
        <>
            <div
                className={`modal fade ${modal.showModal ? "show" : ""}`}
                style={{ display: modal.showModal ? "block" : "none" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">New Transaction</h4>
                                <button type="button" className="btn-close" onClick={() => modal.setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <NavTabs form={{ formfields: formfields, setFormfields: setFormfields }} />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-dark">Create Transaction</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {modal.showModal && <div className="modal-backdrop show"></div>}
        </>
    )
}

export default Modal