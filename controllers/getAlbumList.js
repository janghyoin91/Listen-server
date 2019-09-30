import { albums } from '../models';

const getAlbumList = (req, res) => {
	albums.findAll().then((list) => {
		res.json(list);
	});
};

export default getAlbumList;
