import cookieSession from 'cookie-session'
import express, { Request, Response } from 'express'
import { loginRouter } from './routes/loginRoutes'


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['fjdhaslkfhjas'] }))

app.use(loginRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})