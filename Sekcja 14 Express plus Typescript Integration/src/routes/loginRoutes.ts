import { Router, Request, Response, NextFunction } from "express";

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

const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`<div>You are logged in</div>
        <a href="/loggout">Logout</a>`);
  } else {
    res.send(`<div>You are not logged in</div>
        <a href="/login">Login</a>`);
  }
});

router.get("/loggout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requairedAuth, (req: Request, res: Response) => {
  res.send("Welcom on proteced page");
});

export { router };
