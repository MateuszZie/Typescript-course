import { Request, Response } from "express";
import { get, Controller, post, bodyValidtor } from "./decorators";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@Controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
    res.send(`<form method="POST">
        <div>
        <label>Email</label>
        <input name="email"/>
        </div>
        <div>
        <label>Password</label>
        <input name="password" type="password"/>
        </div>
        <button>Submit</button>
        </form>`);
  }

  @post("/login")
  @bodyValidtor("email", "password")
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Inwalid email or password");
    }
  }
  @get("/loggout")
  getLoggout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
