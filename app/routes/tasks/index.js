const tasks = require('express').Router();
//const all = require('./all');
//const single = require('./single');
//const findObject = require('../../utils/findObject');

//cars.param('carId', findObject('car'));

tasks.get('/',(req, res) => {

    res.status(200).json("task details.");

});


//cars.get('/', all);
//cars.get('/:carId', single);

module.exports = tasks;