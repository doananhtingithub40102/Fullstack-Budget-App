import { createContext, useState, useEffect } from "react"

const AccountContext = createContext()

const AccountProvider = ({ children }) => {
    const [currentAccountId, setCurrentAccountId] = useState(null)

    useEffect(() => {
        const storedAccountId = localStorage.getItem("accountId")
        if (storedAccountId) {
            setCurrentAccountId(storedAccountId)
        } else {
            setCurrentAccountId("A0001")
        }
    }, [])

    return (
        <AccountContext.Provider value={{ currentAccountId, setCurrentAccountId }}>
            {children}
        </AccountContext.Provider>
    )
}

export { AccountProvider, AccountContext }