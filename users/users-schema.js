import mongoose from 'mongoose';
const schema = mongoose.Schema(  {
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
  bio: {type: String},
}, {collection: 'users'});
export default schema;