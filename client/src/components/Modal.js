const Modal = ({ modal_id }) => {
    return (
        // The Modal
        <div className="modal fade" id={modal_id}>
            <div className="modal-dialog">
                <div className="modal-content">

                    {/* Modal Header */}
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    {/* Modal body */}
                    <div className="modal-body">
                        Modal body..
                    </div>

                    {/* Modal footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal