const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(require("./routes/account"))
app.use(require("./routes/transaction"))
app.use(require("./routes/user"))
const dbo = require("./db/conn")

app.get("/", (req, res) => {
    res.send("App is running")
})

dbo.connectToMongoDB(error => {
    if (error) throw error

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})