var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var { socketapi, socketInfo } = require("./socketapi") // <== Add this line  socket.io

var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")

var app = express()

//socket.io middleware
app.use((req, res, next) => {
    req.io = socketapi.io
    req.art = "art" //แนบ req.art ไปด้วย
    console.log(socketInfo)
    req.socket_id = socketInfo.socket_id
    req.user_id = socketInfo.user_id
    console.log("req.socket_id", req.socket_id, "req.user_id", req.user_id)
    return next()
})

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)

module.exports = { app, socketapi }
