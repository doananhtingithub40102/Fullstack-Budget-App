import NavTabs from "./NavTabs"

const Modal = ({ modal_id }) => {
    return (
        <div className="modal fade" id={modal_id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form action="">
                        <div className="modal-header">
                            <h4 className="modal-title">New Transaction</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <NavTabs />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-dark">Create Transaction</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal