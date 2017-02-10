'use strict';

var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
  addTodo: addTodo
}

function addTodo(req, res) {
  var start = monitor();
  client.create({
    index: 'todo',
    type: 'todo',
    id: req.swagger.params.todo.value.todo_id,
    body: req.swagger.params.todo.value
  }, function(error, response) {
    res.header('Content-Type', 'application/json');
    if (error) {
      console.log(error);
      res.statusCode = 409;
      res.end(JSON.stringify(error));
    } else {
      req.swagger.params.todo.value.datecreated = new Date();
      console.log(`Todo ${req.swagger.params.todo.value.todo_id} added to Elasticsearch`);
      res.end();
      monitor(start, 'AddTodo');
    }
  });
}
