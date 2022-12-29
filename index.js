const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 4000

const apiRouter = require('./routes/api');


app.use(cors({
    origin: "http://localhost:3000"
}))

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));


//connect to the mongodb database
connectDB()
app.use("/api", apiRouter);
app.use("/api/auth", require('./routes/user-routs'));
app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))


app.get('/', (req, res) => {
    res.send('server running')
})

app.listen(PORT, console.log("Server is running on port ", PORT))