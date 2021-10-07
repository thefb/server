import { Request, Response, NextFunction } from 'express'
import { get, controller, use, post, bodyValidator } from './decorators'

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next()
  } else {
    res.status(403).json({ message: "Not permitted" })
  }
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You're logged In</div>
        <a href="/auth/logout">Logout</a>
      </div>
      `)
    } else {
      res.send(`
      <div>
        <div>You're not logged In</div>
        <a href="/auth/login">Login</a>
      </div>
      `)
    }
  }
  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user')
  }
}