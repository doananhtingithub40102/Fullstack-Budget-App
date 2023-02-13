import { NavLink } from "react-router-dom"
import { FcCalendar, FcComboChart, FcSettings, FcBusinessman } from "react-icons/fc"
import { GiMasonJar } from "react-icons/gi"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark py-2 px-3" style={{ backgroundColor: "#1d1c44" }}>
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
                            <NavLink className="nav-link" to="/">
                                <FcCalendar className="fs-2" />
                                <span className="d-inline-block ms-1 text-nav-link">Daily</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <GiMasonJar className="fs-2" style={{ color: "khaki" }} />
                                <span className="d-inline-block ms-1 text-nav-link">6 Jars</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <FcComboChart className="fs-2" style={{ color: "khaki" }} />
                                <span className="d-inline-block ms-1 text-nav-link">Statistics</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <FcSettings className="fs-2" style={{ color: "khaki" }} />
                                <span className="d-inline-block ms-1 text-nav-link">Setting</span>
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex my-2 me-2">
                        <input className="form-control me-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto">
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