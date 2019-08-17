const mongoose = require('mongoose');

const { Schema } = mongoose;

const parentTaskModel = new Schema(
  {
    parentTaskId: { type: String },
    parentTask: { type: String },
    
  }
);

// True since it is a parallel middleware
parentTaskModel.pre('save', function(next, done) {
	if(!this.parentTaskId){
		next(new Error("parentTaskId should not be null"));
  }
  if(!this.parentTask){
		next(new Error("parentTask should not be empty"));
	}
  	next();
});


module.exports = mongoose.model('ParentTask', parentTaskModel);