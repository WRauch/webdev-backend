import express from 'express';
import UserController
  from "./controllers/users-controller.js"
import session from 'express-session';
import cors from 'cors'
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://127.0.0.1:27017/hockey'
mongoose.connect(CONNECTION_STRING);
const app = express();

var corsOptions = {
  origin: function (origin, callback) {
    if (origin.includes('neltify') || origin.includes('localhost')) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors({
  credentials:true,
  origin: corsOptions
}));
app.set('trust proxy', 1);
app.use(session(
  {
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  }
))
app.use(express.json());
UserController(app);
app.listen(process.env.PORT || 4000);

