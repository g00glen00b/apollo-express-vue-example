import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: String,
  firstPostId: Schema.Types.ObjectId,
  answerIds: [Schema.Types.ObjectId],
  createdAt: {type: Date, default: Date.now}
}, {collection:'Question'});

export default mongoose.model('Question', questionSchema);