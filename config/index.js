const env = 'development';

const dbConfig = require('./sequelize')[env];

const config = {
	dbConfig
};

module.exports = config;
