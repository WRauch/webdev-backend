import mongoose from "mongoose";
import friendsSchema from "./friends-schema.js";
const friendsModel = mongoose.model("friends", friendsSchema);
export default friendsModel;
