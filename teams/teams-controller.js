import * as teamsDao from "./teams-dao.js";
import * as followsDao from "../follows/follows-dao.js"

const TeamsController = (app) => {
  const followTeam = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }

    let team = await teamsDao.findTeamByTeamId(req.params.teamId);
    if (!team) {
        team = await teamsDao.createTeam(req.body);
    }
    const follow = await followsDao.createFollow({
      userId: currentUser._id,
      teamId: team.teamId,
      teamName: team.name,
      username: currentUser.username,
      albumMongooseKey: team._id,
    });
    res.json(follow);
  };
  const getTeamFollowers = async (req, res) => {

    const followers = await followsDao.findFollowByTeamId(req.params.teamId)
    res.json(followers)
}


  app.post("/api/teams/:teamId/follows", followTeam);
  app.get("/api/teams/:teamId/follows", getTeamFollowers);

};



export default TeamsController;
