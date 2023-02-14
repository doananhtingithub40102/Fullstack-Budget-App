import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"

import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App