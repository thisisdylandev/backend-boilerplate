const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.json({
    name: 'Node Boilerplate',
    message: 'I am a node app, using sequelize to connect to a MySQL db',
    details: 'Uses Docker and docker-compose to build docker containers for node and MySQL',
  });
});

module.exports = router;
