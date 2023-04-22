import express from 'express';
import UserController
  from "./users/users-controller.js"
import TeamsController from './teams/teams-controller.js';
import session from 'express-session';
import cors from 'cors'
import mongoose from "mongoose";
import FriendsController from './friends/friends-controller.js';
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
app.enable('trust proxy', true);
app.use(session(
  {
    proxy: true,
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  }
))
app.use(express.json());
UserController(app);
TeamsController(app);
FriendsController(app);
app.listen(process.env.PORT || 4000);

