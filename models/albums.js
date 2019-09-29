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
			},
			released: {
				type: DataTypes.STRING
			},
			genre: {
				type: DataTypes.STRING
			},
			company: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: false
		}
	);

	return albums;
};
