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
app.use(cors({
  credentials:true,
  origin: "http://localhost:3000"
}));
//app.set('trust proxy', 1); // may need to remove locally
app.use(session(
  {
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    //cookie: {secure: false}
  }
))
app.use(express.json());
UserController(app);
app.get('/', (req, res) => {res.send('Cool Link')})
app.listen(process.env.PORT || 4000);

