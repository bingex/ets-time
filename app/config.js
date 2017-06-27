let config = {
  port: 3000,
  secret: 'ZyXHLWg35z',
  type_works: [
    'Development',
    'Design',
    'Bug fixing',
    'Documentation',
    'Mentoring',
    'Study',
    'Testing',
    'Meeting',
    'Vacation'
  ],
  task_status: ['Accepted', 'Declined', 'Open'],
  roles: ['owner', 'pm', 'member'],
  positions: ['php', 'nodejs', 'ios', 'android', 'qa', 'ui/ux', 'fed', 'other'],
  db: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '1',
      database: 'ets',
      port: '3306'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
switch (process.env.NODE_ENV) {
  case 'production':
    config.db.connection.user = 'ets';
    config.db.connection.password = 'ets13#';
    break;
  default:
    break;
}
module.exports = config;
