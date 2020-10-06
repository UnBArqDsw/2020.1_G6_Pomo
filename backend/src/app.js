import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    console.log("testes");
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
