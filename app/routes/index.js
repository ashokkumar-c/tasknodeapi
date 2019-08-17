const routes = require('express').Router();

const tasks = require('./tasks');
routes.use('/tasks',tasks);

const parenttasks = require('./parentTasks');
routes.use('/parenttasks',parenttasks);

routes.get('/', (req, res) => {
    res.status(200).json({ 
      status: 'Succeses',
      message: 'Rest API is working fine.' });
  });
  
module.exports = routes;

