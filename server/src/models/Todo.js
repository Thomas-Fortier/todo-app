import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  value: String,
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Todo', todoSchema);