const express = require ('express');
const mongoose = require ('mongoose');
const cookieParser = require ('cookie-parser');
const path = require ('path');
const bd = require ('./config/mongoose-connection');
const ownersRouter = require ('./routes/ownersRouter');
const usersRouter = require ('./routes/usersRouter');
const indexRouter = require ('./routes/index');
const productsRouter = require ('./routes/productsRouter');
const db = require ('./config/mongoose-connection');
require ('dotenv').config ();
const { isLoggedIn } = require ('./middlewares/isLoggedIn');
const expresSession = require ('express-session');
const flash = require('flash')

const app = express();


app.use (express.json ());
app.use (express.urlencoded ({ extended: true }));
app.use (cookieParser ());
app.use (express.static (path.join (__dirname, 'public')));
app.set ('view engine', 'ejs');


app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


app.listen(3000);



