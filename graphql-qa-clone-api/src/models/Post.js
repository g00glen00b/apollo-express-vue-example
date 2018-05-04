import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: String,
  authorId: Schema.Types.ObjectId,
  createdAt: {type: Date, default: Date.now},
  questionId: Schema.Types.ObjectId,
  votes: [{
    userId: Schema.Types.ObjectId,
    status: String
  }]
}, {collection:'Post'});

export default mongoose.model('Post', postSchema);