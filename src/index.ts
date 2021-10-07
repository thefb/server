import cookieSession from 'cookie-session'
import express, { Request, Response } from 'express'
import { loginRouter } from './routes/loginRoutes'
import './controllers/LoginController'
import { router as controllerRouter } from './controllers/decorators/controller'


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['fjdhaslkfhjas'] }))
app.use(loginRouter)
app.use(controllerRouter)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})