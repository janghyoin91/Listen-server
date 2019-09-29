module.exports = (sequelize, DataTypes) => {
	const musics = sequelize.define(
		'musics',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true
			},
			album_id: {
				type: DataTypes.INTEGER
			},
			album_name: {
				type: DataTypes.STRING
			},
			name: {
				type: DataTypes.STRING
			},
			url: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: false
		}
	);

	return musics;
};
