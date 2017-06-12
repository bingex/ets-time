const Validator = require('./Validator');
const env = require('./../../config');

module.exports = (req, res, next) => {
  const rules = {
    user_name: 'string|min:3',
    project: 'string|min:2',
    date_start: '|regex:/^\\d{4}-\\d{2}-\\d{2}$/|date',
    date_end: '|regex:/^\\d{4}-\\d{2}-\\d{2}$/|date',
    status: 'string|in:' + env.task_status.join(','),
    type_work: 'string|in:' + env.type_works.join(',')
  };

  const validate = new Validator(req.query, rules);
  if (validate.fails()) {
    res.status(400).send(validate.errors);
  } else {
    next();
  }
};
