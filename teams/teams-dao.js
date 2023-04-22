import teamsModel from "./teams-model.js";

export const findTeamByTeamId = async (id) => {
    const user = await teamsModel.findOne({teamId: id})
    return user;
};

export const createTeam = async (team) => {
    const newTeam = await teamsModel.create(team)
    return newTeam
}
  