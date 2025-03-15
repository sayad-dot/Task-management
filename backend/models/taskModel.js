const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title:      { type: String, required: true },
  description:{ type: String },
  dueDate:    { type: Date },
  priority:   { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  category:   { type: String },
  completed:  { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
