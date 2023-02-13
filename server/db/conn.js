const { MongoClient } = require("mongodb")
const url = process.env.ATLAS_URL
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
    connectToMongoDB: async (callback) => {
        try {
            await client.connect()
            _db = client.db("budget")
            console.log("Successfully connected to MongoDB.")

            return callback(null)
        } catch (error) {
            return callback(error)
        }
    },

    getDb: () => {
        return _db
    }
}