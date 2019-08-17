const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const mongoose = require('mongoose');
require('sinon-mongoose');

//Importing parentTask model for our unit testing.
const parentTask = require('../../../app/models/parentTask');


describe("Get all parent tasks", function(){
    // Test will pass if we get all parent tasks
   it("should return all parentTask", function(done){
       var parentTaskMock = sinon.mock(parentTask);
       var expectedResult = {status: true, parentTask: []};
       parentTaskMock.expects('find').yields(null, expectedResult);
       parentTask.find(function (err, result) {
       parentTaskMock.verify();
       parentTask.restore();
           expect(result.status).to.be.true();
           done();
       });
   });
});