import { Request, Response, NextFunction } from 'express'
import { get, controller } from './decorators'

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request was made to ${JSON.stringify(req)}`)
  next()
}

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="post">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button type="submit">Enviar</button>
    </form>
    `)
  }
}