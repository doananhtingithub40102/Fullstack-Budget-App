function formatMoney(amount, currentUnit) {
    let hundreds_arr = []
    let money = amount.toString()
    let isNegative = false

    if (money[0] === "-") {
        isNegative = true
        money = money.slice(1)
    }

    let end = money.length
    let start = end - 3


    while (start > 0) {
        hundreds_arr.unshift("." + money.slice(start, end))
        if (start - 3 <= 0) {
            hundreds_arr.unshift(money.slice(0, start))
            break
        }
        end = start
        start = end - 3
    }

    if (hundreds_arr.length !== 0) {
        money = hundreds_arr.join("") + currentUnit
    } else {
        money = money + currentUnit
    }

    if (isNegative) {
        money = "-" + money
    }

    return money
}

function sumMoney(transactionData, isExpend = true) {
    const sumMoney = transactionData.reduce((sum, transaction) => {
        sum += (isExpend ? (transaction.type === "expenditure" ? transaction.amount : 0) : (transaction.type === "income" ? transaction.amount : 0))

        return sum
    }, 0)

    return sumMoney
}

export { formatMoney, sumMoney }