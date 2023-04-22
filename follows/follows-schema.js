import mongoose from "mongoose";
const followsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    albumMongooseKey: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeamsModel",
    },
    teamId: Number,
    teamName: String,
    username: String,
  },
  { collection: "follows" }
);

export default followsSchema;
