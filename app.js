import express from 'express';
import UserController
  from "./controllers/users-controller.js"
const app = express();
UserController(app);
app.get('/', (req, res) => {res.send('Cool Link')})
app.listen(process.env.PORT || 4000);

