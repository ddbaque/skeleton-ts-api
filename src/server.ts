import express from "express";
import morgan from "morgan";
import cors from "cors";
import { corsOptions, PORT as port, BASE_URL as base_url } from "./config";

import "express-async-errors"; // important for capture async errors

import apiRoutes from "./routes/index.routes";
import { errorHandler } from "./middlewares/globalErrorHandler";

class Server {
  private app = express();
  private PORT = port;
  private BASE_URL = base_url;

  //** ========= Global Middlewares ========= */
  configureMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
    this.app.use(morgan("dev"));
  }

  //** ========= Rest Api Routes ========== */
  configureRoutes() {
    this.app.use("/api", apiRoutes);
    this.app.use(errorHandler)
  }

  //** ========= Error Middleware Handler ======== */
  configureErrors() {
    this.app.use(errorHandler);
  }

  start() {
    this.configureMiddlewares();
    this.configureRoutes();
    this.configureErrors();

    this.app.listen(this.PORT, () => {
      console.log(
        `server listen on port -> ${this.PORT}\n${this.BASE_URL}${this.PORT}`
      );
    });
  }
}

export default Server;
