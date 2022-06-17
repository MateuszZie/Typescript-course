import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { router } from "./routes/loginRoutes";
import { router as loginRouter } from "./controllers/decorators/controller";
import "./controllers/LoginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["sdsd"] }));
app.use(router);
app.use(loginRouter);

app.listen(3000, () => {
  console.log("listen on 3000");
});
