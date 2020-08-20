// Take the code from template.router.js and build a back end route that gets the data out of the database
// Should be a GET that querys the 'pickups' table, something like `SELECT * FROM 'pickups`
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// /**
//  * GET route template
//  */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "pickups";`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM "pickups" WHERE user_id=$1;`;

  pool
    .query(queryText, [req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// /**
//  * POST route template
//  */
router.post('/new', (req, res) => {
  const queryText = `INSERT INTO "pickups" 
  ("groupId", "daysOfWeek", "startTime", "endTime", "user_id") 
  VALUES ($1, $2, $3, $4, $5);`;

  const data = req.body;

  pool
    .query(queryText, [1, parseInt(data.day), '10:45:00', '12:45:00', data.id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error saving name: ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
