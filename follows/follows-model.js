import followsSchema from "./follows-schema.js";
import mongoose from "mongoose";
const followsModel = mongoose.model("follows", followsSchema);
export default followsModel;
