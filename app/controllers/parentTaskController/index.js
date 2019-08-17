const parentTaskModel = require('../../models/parentTask');



// Handle index actions
exports.getall = (req, res) => {
    parentTaskModel.find(function (err, parentTasks) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "parentTasks retrieved successfully",
            data: parentTasks
        });
    }); // end of save function.
}; // end of getall function

exports.get = ((req, res) => res.json(
    {
        status: "success",
        message: "parentTask retrieved successfully",        
        data: req.parentTask
    }));


exports.findParentTaskByID = (req, res, next) => {
    parentTaskModel.findById(req.params.id, (err, parentTask) => {
        //console.log(req);
        if (err){
            res.send(err);
        }
        if(parentTask){            
            req.parentTask = parentTask;
            return next();
        }    
        return res.sendStatus(404);    
    });// end of findById function.
};

exports.add = (req, res) => {
    var parentTask = new parentTaskModel();

    parentTask.parenttaskId = req.body.parenttaskId;
    parentTask.parenttask = req.body.parenttask;

    parentTask.save((err, parentTask) => {        
        res.json({
            status: 'Successes',
            message: 'New ParentTask created!',
            error:err,
            data: parentTask
        });
    }); // end of save function.
}; // end of add function

exports.udpate = (req, res) => {

    var parentTask = req.parentTask;
    parentTask.parentTaskId = req.body.parentTaskId;
    parentTask.parentTask = req.body.parentTask;
    console.log(req.body.parenttaskId);
    console.log(parentTask);

    parentTask.save((err, parentTask) => {   
        console.log(parentTask);
        console.log(err);  
        res.json({
            status: 'Successes',
            message: 'ParentTask Updated',
            error:err,
            data: parentTask
        });      
    }); // end of save function.
}; // end of put function

// Handle delete contact
exports.delete = function (req, res) {   
    parentTaskModel.remove({
            _id: req.params.id}, (err, parentTask) => {
        console.log(req);
        if (err){
            res.send(err);
        }
        res.json({
            status: "success",
            message: 'Contact deleted'
        });    
    });// end of delete function.

};
