import { albums } from '../models';

const getAlbum = (req, res) => {
	const { albumId } = req.body;
	albums.findOne({ where: { id: albumId } }).then((album) => {
		res.json(album);
	});
};

export default getAlbum;
