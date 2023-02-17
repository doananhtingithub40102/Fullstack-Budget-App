import { FcCalendar, FcComboChart, FcSettings, FcBusinessman } from "react-icons/fc"
import { GiMasonJar } from "react-icons/gi"

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark px-3 py-0">
                <a className="navbar-brand" href="/">
                    <img src="/brand.png" height="36" alt="brand" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">
                                <FcCalendar className="fs-2" />
                                <span className="d-inline-block ms-1 text-nav-link">Daily</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">
                                <GiMasonJar className="fs-2" style={{ color: "khaki" }} />
                                <span className="d-inline-block ms-1 text-nav-link">6 Jars</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">
                                <FcComboChart className="fs-2" style={{ color: "khaki" }} />
                                <span className="d-inline-block ms-1 text-nav-link">Statistics</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">
                                <FcSettings className="fs-2" style={{ color: "khaki" }} />
                                <span className="d-inline-block ms-1 text-nav-link">Setting</span>
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex me-3 my-2">
                        <input className="form-control me-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button
                                type="button"
                                className="rounded-circle p-1"
                            >
                                <FcBusinessman className="fs-2" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar