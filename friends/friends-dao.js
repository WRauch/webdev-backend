import friendsModel from "./friends-model.js";

export const createFriend = async (friend) => {
  const newFriend = await friendsModel.create(friend);
  return newFriend;
};

export const findFollowersByFollowed = async (userId) => {
  const followers = await friendsModel.find({ follower: userId });
  return followers;
};

export const findFollowedByFollowing = async (userId) => {
  const followed = await friendsModel.find({ following: userId });
  return followed;
};

export const unfriend = async (follow) => {
  const deletedFollow = await friendsModel.deleteOne(follow);
  return deletedFollow;
};
