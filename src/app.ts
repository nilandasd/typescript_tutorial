import express from "express";
import path from "path";
import morgan from "morgan";
import router from './routes/routes';

const app = express();

app.use(morgan('combined'));
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.use('/', router);

export default app;
