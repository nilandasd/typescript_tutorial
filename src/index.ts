import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import path from "path";
import morgan from "morgan";

const app = express();
const port = process.env.SERVER_PORT;
const mongoUri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/course-goals?authSource=admin`;

app.use(morgan('combined'));
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get( "/", ( req, res ) => {
    res.render( "index" );
} );

mongoose.connect(
  mongoUri,
  {}
).then(
  () => {
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
