import mongoose from 'mongoose';
const teamsSchema = mongoose.Schema(  {
  teamId: { type: String, required: true, unique: true },
  name: {type: String, required: true,}
}, {collection: "teams"});
export default teamsSchema;