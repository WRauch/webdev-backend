const UserController = (app) => {
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
  }
  
  const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
      .find(u => u._id === userId);
    res.json(user);
  }
export default UserController