import followsModel from "./follows-model.js";
export const createFollow = async (follow) => {
  const newFollow = await followsModel.create(follow);
  return newFollow;
};

export const deleteFollow = async (follow) => {
  const newFollow = await followsModel.deleteOne({ _id: id });
  return newFollow;
};

export const findFollowByTeamId = async (teamId) => {
  const follows = await followsModel.find({ teamId });
  return follows;
};

export const findFollowByUserId = async (userId) => {
  const follows = await followsModel.find({ userId });
  return follows;
};
