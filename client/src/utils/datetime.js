function getCurrentDateTime() {
    let currentDateTime = ""

    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const hour = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")

    currentDateTime = year + "-" + month + "-" + day + "T" + hour + ":" + minutes

    return currentDateTime
}

function getCurrentMonthYear() {
    const date = new Date()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = String(date.getFullYear())

    return [month, year]
}

function getMonthName(month) {
    const monthNumber = parseInt(month)
    const date = new Date()
    date.setMonth(monthNumber - 1)

    return date.toLocaleString("en-US", { month: "long" })
}

function getWeekDay(datetime) {
    const date = new Date(datetime)

    return date.toLocaleDateString("en-US", { weekday: "long" })
}

function getBgForWeekDay(weekday) {
    let background

    switch (weekday) {
        case "Sunday":
            background = "bg-danger"
            break;
        case "Saturday":
            background = "bg-primary"
            break;

        default:
            background = "bg-secondary"
            break;
    }

    return background
}

export { getCurrentDateTime, getCurrentMonthYear, getMonthName, getWeekDay, getBgForWeekDay }