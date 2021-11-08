import express, {Application} from "express";
import router from "./routes";
import path from "path/posix";
import loadHelpers from "./hbs-helpers";
const hbs = require('hbs');

class Server {
  private _app: Application;
  private _port: string;

  constructor() {
    this._app = express();
    this._port = process.env.PORT || "8080";

    this.middlewares();

    this.views();

    this.router();
  };

  listen() {
    this._app.listen(this._port, () => {
      console.log(`Server is running in http://localhost:${this._port}`)
    })
  }

  middlewares() {
    this._app.use(express.static("src/public"));
  }

  router() {
    this._app.use('/', router);
  }

  views() {
    loadHelpers();
    hbs.registerPartials(path.join(__dirname, '/views/partials'))
    this._app.set("views", path.join(__dirname, 'views'))
    this._app.set('view engine', 'hbs')
  }

}

export default Server;
