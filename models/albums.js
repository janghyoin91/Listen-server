module.exports = (sequelize, DataTypes) => {
	const albums = sequelize.define(
		'albums',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING
			},
			artist: {
				type: DataTypes.STRING
			},
			cover: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: false
		}
	);

	return albums;
};
