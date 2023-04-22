import mongoose from 'mongoose';
import teamSchema from './teams-schema.js'
const teamsModel = mongoose
              .model('TeamsModel', teamSchema);
export default teamsModel;