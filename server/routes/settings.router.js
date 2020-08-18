const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "full_address";`;

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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "pickups" ("pickup_id", "groupId", "daysOfWeek", "startTime", "endTime") VALUES ($1, $2, $3, $4, $5);`;

  const data = req.body;

  pool
    .query(queryText, [data.groupId, data.daysOfWeek])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error saving name: ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
