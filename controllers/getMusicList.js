import { musics } from '../models';

const getMusicList = (req, res) => {
	console.log(req.body);
	const { albumId } = req.body;
	console.log(albumId);
	musics.findAll({ where: { album_id: albumId } }).then((list) => {
		res.json(list);
	});
};

export default getMusicList;
