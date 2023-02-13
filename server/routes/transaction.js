const express = require("express")
const transactionRouter = express.Router()
const dbo = require("../db/conn")
const ObjectId = require("mongodb").ObjectId

transactionRouter.route("/transaction/:account_id").get(async (req, res) => {
    const db_connect = dbo.getDb()
    try {
        const myquery = {
            account_id: req.params.account_id
        }
        const result = await db_connect.collection("transactions").find(myquery)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = transactionRouter