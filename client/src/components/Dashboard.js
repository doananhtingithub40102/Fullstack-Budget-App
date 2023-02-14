import { FcPrevious, FcNext } from "react-icons/fc"

export default function Dashboard() {
    return (
        <main className="border-top pb-2">
            <div className="mx-2 mt-2">
                <button
                    type="button"
                    className="btn"
                    style={{ padding: "0 0 10px 0" }}
                >
                    <FcPrevious />
                </button>
                <span className="text-light">Tháng 02/2023</span>
                <button
                    type="button"
                    className="btn"
                    style={{ padding: "0 0 10px 0" }}
                >
                    <FcNext />
                </button>
            </div>
            <div className="border-bottom row">
                <div className="col-md-6 d-flex justify-content-between px-4">
                    <div className="text-white">
                        <div>Aggregate income</div>
                        <span className="text-info">2.000.000đ</span>
                    </div>
                    <div className="text-white">
                        <div>Aggregate expenditure</div>
                        <span className="text-danger">2.000.000đ</span>
                    </div>
                    <div className="text-white">
                        <div>Balance</div>
                        <span className="text-white-50">2.000.000đ</span>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Daily</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="/">Date</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="/">Week</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="/">Month</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}