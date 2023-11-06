import connectMongo from './config/mongo';
import app from './app';

const port = process.env.SERVER_PORT;

connectMongo.then(() => {
    // tslint:disable-next-line:no-console
    console.log('connected to mongo');
    app.listen( port, () => {
        // tslint:disable-next-line:no-console
        console.log( `server started at http://localhost:${ port }` );
    } );
  }
).catch(
  (err: Error) => {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
);
