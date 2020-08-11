const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "name" ("first_name", "last_name") VALUES ($1, $2);`;

  const data = req.body;

  pool
    .query(queryText, [data.firstName, data.lastName])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error saving name: ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
