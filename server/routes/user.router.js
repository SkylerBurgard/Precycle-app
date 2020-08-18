const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText =
    'INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id';
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get('/address/:id', rejectUnauthenticated, (req, res, next) => {
  const userId = Number(req.params.id);

  const queryText = `SELECT "user"."username", "user_address"."full_address" FROM "user"
  JOIN "user_address" ON "user_address"."ua_id" = "user_address"."user_id" WHERE "user"."id" = $1;`;

  pool
    .query(queryText, [userId])
    .then((dbResponse) => {
      const user = dbResponse.rows;
      res.send(user[0]);
    })
    .catch((err) => {
      console.log(`${err}`);
      res.sendStatus(500);
    });
});

router.post('/user/name', rejectUnauthenticated, (req, res, next) => {
  const user = req.body;
  console.log(user);
  const query = `INSERT INTO "name" ("first_name", "last_name", "user_id")
  VALUES ($1, $2, $3);`;

  pool
    .query(query, [user.firstName, user.lastName, user.id])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`${err}`);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
