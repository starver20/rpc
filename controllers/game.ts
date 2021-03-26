import { Request, Response } from 'express';

type playerMoves = {
  p1: number;
  p2: number;
  p3: number;
  p4: number;
};
interface playerVersus {
  p1: playerMoves;
  p2: playerMoves;
  p3: playerMoves;
  p4: playerMoves;
}

export const startGame = (req: Request, res: Response) => {
  let arr: {
    playerMoves: playerMoves;
    playerVersus: playerVersus;
  } = {
    playerMoves: { p1: 0, p2: 0, p3: 0, p4: 0 },
    playerVersus: {
      p1: { p1: -1, p2: 0, p3: 0, p4: 0 },
      p2: { p1: 0, p2: -1, p3: 0, p4: 0 },
      p3: { p1: 0, p2: 0, p3: -1, p4: 0 },
      p4: { p1: 0, p2: 0, p3: 0, p4: -1 },
    },
  };

  const arrItr: any = [];

  for (let j = 0; j < 50; j++) {
    for (const playerMovesKey in arr.playerMoves) {
      arr.playerMoves[playerMovesKey as keyof playerMoves] = Math.floor(
        Math.random() * 3 + 1
      );
    }

    for (let key in arr.playerMoves) {
      const _key = key as keyof playerMoves;
      let _playerMovesKey: keyof playerMoves;

      if (arr.playerMoves[_key] === 1) {
        for (let playerMovesKey in arr.playerMoves) {
          _playerMovesKey = playerMovesKey as keyof playerMoves;

          if (arr.playerMoves[_playerMovesKey] === 3) {
            arr.playerVersus[_key][_playerMovesKey]++;
          }
        }
      } else if (arr.playerMoves[_key] === 2) {
        for (let playerMovesKey in arr.playerMoves) {
          _playerMovesKey = playerMovesKey as keyof playerMoves;

          if (arr.playerMoves[_playerMovesKey] === 1) {
            arr.playerVersus[_key][_playerMovesKey]++;
          }
        }
      } else if (arr.playerMoves[_key] === 3) {
        for (let playerMovesKey in arr.playerMoves) {
          _playerMovesKey = playerMovesKey as keyof playerMoves;

          if (arr.playerMoves[_playerMovesKey] === 2) {
            arr.playerVersus[_key][_playerMovesKey]++;
          }
        }
      }
    }
    arrItr[j] = JSON.parse(JSON.stringify(arr));
  }
  res.send(arrItr);
};
