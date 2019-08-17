const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskModel = new Schema(
  {
    taskId: { type: String },
    parentTaskId: { type: String },
    task: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    priority: { type: Number, default: 0 }
  }
);

module.exports = mongoose.model('Task', taskModel);