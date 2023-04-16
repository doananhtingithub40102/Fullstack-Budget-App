import { FcCalendar, FcComboChart, FcSettings, FcBusinessman } from "react-icons/fc"
import { GiMasonJar } from "react-icons/gi"
import { CiImport, CiExport } from "react-icons/ci"

import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark px-3 py-0">
                <NavLink className="navbar-brand" to="/">
                    <img src="/brand.png" height="36" alt="brand" />
                </NavLink>
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
                            <NavLink className="nav-link text-light" to="/">
                                <FcCalendar className="fs-2" />
                                <span className="d-inline-block ms-1 text-nav-link">Daily</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/">
                                <GiMasonJar className="fs-2" style={{ color: "khaki" }} />
                                <span className="d-inline-block ms-1 text-nav-link">6 Jars</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/">
                                <FcComboChart className="fs-2" />
                                <span className="d-inline-block ms-1 text-nav-link">Statistics</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/import">
                                <CiImport className="fs-2" style={{ color: "#E91E63" }} />
                                <span className="d-inline-block ms-1 text-nav-link">Import</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/">
                                <CiExport className="fs-2" style={{ color: "#FF5722" }} />
                                <span className="d-inline-block ms-1 text-nav-link">Export</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/">
                                <FcSettings className="fs-2" />
                                <span className="d-inline-block ms-1 text-nav-link">Setting</span>
                            </NavLink>
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