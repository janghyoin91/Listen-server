import express from 'express';
import { getMusicList } from '../controllers';

const app = express.Router();

app.post('/musiclist', (req, res) => {
	console.log('/musiclist 라우터에 들어옴~!');
	getMusicList(req, res);
});

export default app;
