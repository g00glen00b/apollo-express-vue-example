import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  postIds: [Schema.Types.ObjectId]
}, {collection:'User'});

export default mongoose.model('User', userSchema);