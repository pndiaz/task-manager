const express = require('express')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')
const { connectDB } = require('./db/mongoose')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

connectDB().then(() => {
    app.listen(port, () => {
        console.log("Running server on port " + port)
    })
})
