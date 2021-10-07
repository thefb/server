import { NextFunction, Request, Response, Router } from 'express'

const loginRouter = Router()

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next()
  } else {
    res.status(403).json({ message: "Not permitted" })
  }
}

loginRouter.get('/login', (req: Request, res: Response) => {
  res.send(`<form method="post">
  <div>
    <label>Email</label>
    <input name="email" />
  </div>
  <div>
    <label>Password</label>
    <input name="password" type="password" />
  </div>
  <button type="submit">Enviar</button>
</form>`)
})

loginRouter.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = { loggedIn: false }
  res.send(`
    <div>
    <div>You're logged out</div>
    <a href="/login">Login</a>
  </div>
    `)
})

loginRouter.get('/', (req: RequestWithBody, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
    <div>You're logged In</div>
    <a href="/logout">Logout</a>
  </div>
    `)
  } else {
    res.send(`
    <div>
    <div>You're not logged In</div>
    <a href="/login">Login</a>
  </div>
    `)
  }
})

loginRouter.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user')
})

export { loginRouter } 