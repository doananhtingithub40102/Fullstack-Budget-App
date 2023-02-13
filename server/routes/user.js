const express = require("express")
const userRouter = express.Router()
const dbo = require("../db/conn")
const ObjectId = require("mongodb").ObjectId

userRouter.route("/login").get(async (req, res) => {
    const db_connect = dbo.getDb()
    try {
        const myquery = {
            username: req.body.username,
            password: req.body.password
        }
        const result = await db_connect.collection("users").findOne({ myquery })
        res.send(200).json(result)
    } catch (error) {
        res.send(404).json({ message: error.message })
    }
})

module.exports = userRouter