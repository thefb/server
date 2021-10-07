import cookieSession from 'cookie-session'
import express from 'express'
import './controllers/LoginController'
import { AppRouter } from './AppRouter'


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['fjdhaslkfhjas'] }))
app.use(AppRouter.getInstance())


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})