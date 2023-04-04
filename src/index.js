const express = require('express')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')
const auth = require('./middleware/auth.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Running server on port " + port)
})