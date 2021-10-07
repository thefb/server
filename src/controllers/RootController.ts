import { Request, Response, NextFunction } from 'express'
import { get, controller, use, post, bodyValidator } from './decorators'

@controller('/')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
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
  }
}