'use strict';

var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
  deleteTodoById: deleteTodoById
}

function deleteTodoById(req, res) {
  var start = monitor();
  console.log(`Deleting Todo with id ${req.swagger.params.id.value}`);
  client.delete({
    index: 'todo',
    type: 'todo',
    id: req.swagger.params.id.value
  }, function(error, response) {
    res.header('Content-Type', 'application/json');
    if (error) {
      res.end(JSON.stringify(error));
    } else {
      res.end(JSON.stringify(response));
      monitor(start, 'DeleteTodoById');
    }
  });
}
