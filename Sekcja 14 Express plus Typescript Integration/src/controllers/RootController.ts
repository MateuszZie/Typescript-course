import { Request, Response, NextFunction } from "express";
import { Controller, get } from "./decorators";
import { use } from "./decorators/use";

const requairedAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("You are not allowed to saw this page please log in");
};

@Controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`<div>You are logged in</div>
              <a href="auth/loggout">Logout</a>`);
    } else {
      res.send(`<div>You are not logged in</div>
              <a href="auth/login">Login</a>`);
    }
  }

  @get("/protected")
  @use(requairedAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcom on proteced page");
  }
}
