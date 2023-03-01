import { useState, useEffect } from "react"
import NavTabs from "./NavTabs"
import { getCurrentDateTime } from "../utils/datetime"
import { defaultExpenditureForm, checkForm } from "../utils/form"

const Modal = ({ modal }) => {
    const [formfields, setFormfields] = useState(defaultExpenditureForm)

    useEffect(() => {
        setFormfields({ ...defaultExpenditureForm, datetime: getCurrentDateTime() })
    }, [modal.showModal])

    function handleSubmit(event) {
        event.preventDefault()

        // console.log(formfields)
        if (checkForm(formfields)) {
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