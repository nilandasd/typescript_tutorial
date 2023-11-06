import connectMongo from './config/mongo';
import app from './app';
import { Application } from 'express';
import { Server as HttpServer } from 'http';

const port = process.env.SERVER_PORT;

class Server {
  app: Application;
  server: HttpServer;

  constructor(app: Application) {
    this.app = app;
  }

  start() {
    connectMongo.then(() => {
        // tslint:disable-next-line:no-console
        console.log('connected to mongo');
        this.server = this.app.listen( port, () => {
            // tslint:disable-next-line:no-console
            console.log( `server started at http://localhost:${ port }` );
        });
      }
    ).catch(
      (err: Error) => {
        // tslint:disable-next-line:no-console
        console.error(err);
      }
    );
  }

  stop() {
    this.server.close();
  }
}

export default new Server(app);
