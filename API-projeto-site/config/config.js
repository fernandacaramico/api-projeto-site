module.exports = {
  production: {
    username: 'grupoteste',
    password: '#Gfgrupot',
    database: '202-grupot',
    host: '202-grupot.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
