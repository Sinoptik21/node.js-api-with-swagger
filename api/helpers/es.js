'use strict';

var Elasticsearch = require('elasticsearch');
module.exports = new Elasticsearch.Client({
  host: 'localhost:9200',
  log: 'error'
});

// client.indices.create({
//   index: 'todo'
// }, (err, resp, status) => {
//   if (err) { console.log(err); }
//   else { console.log('create', resp); }
// });
