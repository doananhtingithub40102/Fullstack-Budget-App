import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import ImportFile from "./components/ImportFile"
import { AccountProvider } from "./utils/AccountProvider"
import { TransactionProvider } from "./utils/TransactionProvider"

import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

const App = () => {
    return (
        <div className="container">
            <AccountProvider>
                <Navbar />
                <TransactionProvider>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/import" element={<ImportFile />} />
                    </Routes>
                </TransactionProvider>
            </AccountProvider>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)