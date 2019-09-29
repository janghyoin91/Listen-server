import Sequelize from 'sequelize';
const { dbConfig } = require('../config');
const { database, username, password } = dbConfig;

const sequelize = new Sequelize(database, username, password, dbConfig);

const db = { sequelize, Sequelize };

db.albums = require('./albums')(sequelize, Sequelize);
db.musics = require('./musics')(sequelize, Sequelize);

module.exports = db;
