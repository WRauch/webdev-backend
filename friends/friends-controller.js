import * as friendsDao from "./friends-dao.js";

function FriendsController(app) {
  const createFriend = async (req, res) => {
    const friend = req.body;
    const newFriend = await friendsDao.createFriend(friend);
    res.json(newFriend);
  };
  const findFollowersByFollowed = async (req, res) => {
    const userId = req.params.userId;
    const followers = await friendsDao.findFollowersByFollowed(userId);
    console.log(followers);
    res.json(followers);
  };
  const findFollowedByFollowing = async (req, res) => {
    const userId = req.params.userId;
    const followed = await friendsDao.findFollowedByFollowing(userId);
    res.json(followed);
  };
  const unfriend = async (req, res) => {
    const follow = req.body;
    const status = await friendsDao.unfriend(follow);
    res.json(status);
  };

  app.post("/api/friends", createFriend);
  app.get("/api/friends/followers/:userId", findFollowersByFollowed);
  app.get("/api/friends/followed/:userId", findFollowedByFollowing);
  app.delete("/api/friends", unfriend);
}

export default FriendsController;
