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

loginRouter.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user')
})

export { loginRouter } 