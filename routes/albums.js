import express from 'express';
import { getAlbumList, getAlbum } from '../controllers';

const app = express.Router();

app.get('/albumlist', (req, res) => {
	console.log('albumlist router');
	getAlbumList(req, res);
});

app.post('/fetchAlbum', (req, res) => {
	console.log('해당 앨범찾아오기');
	getAlbum(req, res);
});

export default app;
