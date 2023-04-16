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

function setDefaultTabs() {
    const expendTabs = document.querySelector(".nav-tabs a[href='#expenditure']")
    const expendTabContent = document.getElementById("expenditure")
    const incomeTabs = document.querySelector(".nav-tabs a[href='#income']")
    const incomeTabContent = document.getElementById("income")

    expendTabs.setAttribute("class", "nav-link active")
    expendTabs.setAttribute("aria-selected", "true")
    expendTabs.removeAttribute("tabindex", "-1")
    expendTabContent.setAttribute("class", "tab-pane text-danger active")
    incomeTabs.setAttribute("class", "nav-link")
    incomeTabs.setAttribute("aria-selected", "false")
    incomeTabs.setAttribute("tabindex", "-1")
    incomeTabContent.setAttribute("class", "tab-pane text-primary fade")

    document.querySelector(".nav-tabs").style = "border-bottom-color: #dc3545 !important"
}

function handleErrorOfDatetime(datetime, index) {
    if (datetime === "") {
        document.getElementsByClassName("errDatetime").item(index).textContent = "Datetime is no empty!"
        return false
    }
    document.getElementsByClassName("errDatetime").item(index).textContent = ""
    return true
}

function handleErrorOfAmount(amount, index) {
    if (amount === "") {
        document.getElementsByClassName("errAmount").item(index).textContent = "Amount of money is no empty!"
        return false
    }
    if (parseInt(amount, 10) < 1000) {
        document.getElementsByClassName("errAmount").item(index).textContent = "Amount of money must be greater than or equal to 1000!"
        return false
    }
    document.getElementsByClassName("errAmount").item(index).textContent = ""
    return true
}

function handleErrorOfDescription(description, index) {
    if (description === "") {
        document.getElementsByClassName("errDescription").item(index).textContent = "Description is no empty!"
        return false
    }
    document.getElementsByClassName("errDescription").item(index).textContent = ""
    return true
}

function checkForm(form, index) {
    if (!handleErrorOfDatetime(form.datetime, index) || !handleErrorOfAmount(form.amount, index) || !handleErrorOfDescription(form.description, index)) {
        return false
    }
    return true
}

function clearErrors(index) {
    document.getElementsByClassName("errDatetime").item(index).textContent = ""
    document.getElementsByClassName("errAmount").item(index).textContent = ""
    document.getElementsByClassName("errDescription").item(index).textContent = ""
}

export { defaultExpenditureForm, defaultIncomeForm, setDefaultTabs, handleErrorOfDatetime, handleErrorOfAmount, handleErrorOfDescription, checkForm, clearErrors }