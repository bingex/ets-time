'use strict';
const Validator = require('./validators/Validator');
const env = require('./../config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const rules = {
    authorization: 'required|min:32'
  };
  const validate = new Validator(req.headers, rules, {
    'required.authorization': 'The authorization header is required',
    'min.authorization': 'The authorization header is invalid'
  });

  if (validate.fails()) {
    res.status(401).send(validate.errors);
  } else {
    jwt.verify(req.headers.authorization, env.secret, (err, decoded) => {
      if (err) return res.status(401).end();
      if (decoded) {
        require('./../models/user').getUserById(decoded.id, (err, user) => {
          if (err) return next(err);
          if (user) return res.json(user);
        });
      }
    });
  }
};
