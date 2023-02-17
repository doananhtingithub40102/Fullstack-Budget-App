import Modal from "./Modal"
import { FcPrevious, FcNext, FcAddDatabase } from "react-icons/fc"

const Dashboard = () => {
    const modal_id = "transactionModal"

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
                <span className="text-light">February 2023</span>
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
                        <span className="text-info">2.000.000₫</span>
                    </div>
                    <div className="text-white">
                        <div>Aggregate expenditure</div>
                        <span className="text-danger">2.000.000₫</span>
                    </div>
                    <div className="text-white">
                        <div>Balance</div>
                        <span className="text-white-50">2.000.000₫</span>
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
                <div className="row">
                    <div className="col-md-6">
                        <div className="transactions_in_day px-3 pb-2">
                            <div className="row mt-1 mb-2 py-2">
                                <div className="col-sm-6">
                                    <span className="badge bg-danger me-2">Thursday</span>
                                    <span>
                                        <span className="text-white-50">February</span> &nbsp;
                                        <span className="fs-5 text-white">16</span>
                                    </span>
                                </div>
                                <div className="col-sm-6 text-end">
                                    <div>
                                        <span className="text-info">0₫</span> &nbsp;
                                        <span className="text-danger">40.000₫</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm sườn kho</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">25.000₫</span>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm chay</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">15.000₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="transactions_in_day px-3 pb-2">
                            <div className="row mt-1 mb-2 py-2">
                                <div className="col-sm-6">
                                    <span className="badge bg-danger me-2">Thursday</span>
                                    <span>
                                        <span className="text-white-50">February</span> &nbsp;
                                        <span className="fs-5 text-white">16</span>
                                    </span>
                                </div>
                                <div className="col-sm-6 text-end">
                                    <div>
                                        <span className="text-info">0₫</span> &nbsp;
                                        <span className="text-danger">40.000₫</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm sườn kho</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">25.000₫</span>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm chay</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">15.000₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="transactions_in_day px-3 pb-2">
                            <div className="row mt-1 mb-2 py-2">
                                <div className="col-sm-6">
                                    <span className="badge bg-danger me-2">Thursday</span>
                                    <span>
                                        <span className="text-white-50">February</span> &nbsp;
                                        <span className="fs-5 text-white">16</span>
                                    </span>
                                </div>
                                <div className="col-sm-6 text-end">
                                    <div>
                                        <span className="text-info">0₫</span> &nbsp;
                                        <span className="text-danger">40.000₫</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm sườn kho</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">25.000₫</span>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm chay</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">15.000₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="transactions_in_day px-3 pb-2">
                            <div className="row mt-1 mb-2 py-2">
                                <div className="col-sm-6">
                                    <span className="badge bg-danger me-2">Thursday</span>
                                    <span>
                                        <span className="text-white-50">February</span> &nbsp;
                                        <span className="fs-5 text-white">16</span>
                                    </span>
                                </div>
                                <div className="col-sm-6 text-end">
                                    <div>
                                        <span className="text-info">0₫</span> &nbsp;
                                        <span className="text-danger">40.000₫</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm sườn kho</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">25.000₫</span>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-sm-4">
                                        <span className="text-white-50">Ăn uống</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <span className="text-white">Cơm chay</span>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <span className="text-info"></span> &nbsp;
                                        <span className="text-danger">15.000₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <button
                type="button"
                className="btn btn-primary rounded-circle border-white position-fixed px-2 pt-0 pb-1 fs-4"
                id="transactionButton"
                data-bs-toggle="modal"
                data-bs-target={`#${modal_id}`}
            >
                <FcAddDatabase />
            </button>

            <Modal modal_id={modal_id} />


        </main>
    )
}

export default Dashboard