import express, { Request, Response } from 'express';
import { startGame } from '../controllers/game';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Go to /game/start');
});

router.get('/game/start', startGame);

export { router as appRoute };
