import mongoose from "mongoose";
const friendsSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    followerUsername: String,
    following: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    followingUsername: String,

  },
  { collection: "friends" }
);

export default friendsSchema;
