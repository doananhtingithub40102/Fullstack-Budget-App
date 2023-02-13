const express = require("express")
const accountRouter = express.Router()
const dbo = require("../db/conn")
const ObjectId = require("mongodb").ObjectId

accountRouter.route("/account/:user_id").get(async (req, res) => {
    const db_connect = dbo.getDb()
    const myquery = {
        user_id: req.params.user_id
    }
    try {
        const result = await db_connect.collection("accounts").findOne(myquery)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = accountRouter