import { getCurrentDateTime } from "./datetime"

const defaultExpenditureForm = {
    type: "expenditure",
    datetime: getCurrentDateTime(),
    jar: "necessaries",
    category: "eat_drink_necessaries",
    amount: "",
    description: ""
}

const defaultIncomeForm = {
    type: "income",
    datetime: getCurrentDateTime(),
    jar: undefined,
    category: "part-time",
    amount: "",
    description: ""
}

function handleErrorOfDatetime(datetime) {
    if (datetime === "") {
        document.getElementsByClassName("errDatetime").item(0).textContent = "Datetime is no empty!"
        document.getElementsByClassName("errDatetime").item(1).textContent = "Datetime is no empty!"
        return false
    }
    document.getElementsByClassName("errDatetime").item(0).textContent = ""
    document.getElementsByClassName("errDatetime").item(1).textContent = ""
    return true
}

function handleErrorOfAmount(amount) {
    if (amount === "") {
        document.getElementsByClassName("errAmount").item(0).textContent = "Amount of money is no empty!"
        document.getElementsByClassName("errAmount").item(1).textContent = "Amount of money is no empty!"
        return false
    }
    document.getElementsByClassName("errAmount").item(0).textContent = ""
    document.getElementsByClassName("errAmount").item(1).textContent = ""
    return true
}

function handleErrorOfDescription(description) {
    if (description === "") {
        document.getElementsByClassName("errDescription").item(0).textContent = "Description is no empty!"
        document.getElementsByClassName("errDescription").item(1).textContent = "Description is no empty!"
        return false
    }
    document.getElementsByClassName("errDescription").item(0).textContent = ""
    document.getElementsByClassName("errDescription").item(1).textContent = ""
    return true
}

function checkForm(form) {
    if (!handleErrorOfAmount(form.amount) || !handleErrorOfDescription(form.description)) {
        return false
    }
    return true
}

function clearErrors(index) {
    document.getElementsByClassName("errDatetime").item(index).textContent = ""
    document.getElementsByClassName("errAmount").item(index).textContent = ""
    document.getElementsByClassName("errDescription").item(index).textContent = ""
}

export { defaultExpenditureForm, defaultIncomeForm, handleErrorOfDatetime, handleErrorOfAmount, handleErrorOfDescription, checkForm, clearErrors }