function getCurrentDateTime() {
    let currentDateTime = ""

    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    const hour = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")

    currentDateTime = year + "-" + month + "-" + day + "T" + hour + ":" + minutes

    return currentDateTime
}

export { getCurrentDateTime }