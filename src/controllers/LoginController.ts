import { Request, Response, NextFunction } from 'express'
import { get, controller, use, post, bodyValidator } from './decorators'

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made mate!!!!!')
  next()
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
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
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body
    if (email === 'hi@hi.com' && password === 'HelloThere') {
      // mark this person as logged in
      req.session = { loggedIn: true }
      //redirect them to our root route
      res.redirect('/')
    } else {
      res.status(403).json({ message: 'Invalid Credentials' })
    }
  }
}
