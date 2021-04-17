import { Request, Response } from 'express';

type playerMoves = {
  p1: number;
  p2: number;
  p3: number;
  p4: number;
};
type playerVersus = {
  p1: playerMoves;
  p2: playerMoves;
  p3: playerMoves;
  p4: playerMoves;
};

export const startGame = (req: Request, res: Response) => {
  let playerResult: {
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

  const playerIterations: any = [];

  for (let j = 0; j < 50; j++) {
    for (const playerMovesKey in playerResult.playerMoves) {
      playerResult.playerMoves[
        playerMovesKey as keyof playerMoves
      ] = Math.floor(Math.random() * 3 + 1);
    }

    playerResult = result(playerResult);
    console.log(playerResult);
    playerIterations[j] = JSON.parse(JSON.stringify(playerResult));
  }
  res.send(playerIterations);
};

const result = (playerResult: {
  playerMoves: playerMoves;
  playerVersus: playerVersus;
}) => {
  for (let key in playerResult.playerMoves) {
    const _key = key as keyof playerMoves;
    let _playerMovesKey: keyof playerMoves;

    if (playerResult.playerMoves[_key] === 1) {
      for (let playerMovesKey in playerResult.playerMoves) {
        _playerMovesKey = playerMovesKey as keyof playerMoves;

        if (playerResult.playerMoves[_playerMovesKey] === 3) {
          playerResult.playerVersus[_key][_playerMovesKey]++;
        }
      }
    } else if (playerResult.playerMoves[_key] === 2) {
      for (let playerMovesKey in playerResult.playerMoves) {
        _playerMovesKey = playerMovesKey as keyof playerMoves;

        if (playerResult.playerMoves[_playerMovesKey] === 1) {
          playerResult.playerVersus[_key][_playerMovesKey]++;
        }
      }
    } else if (playerResult.playerMoves[_key] === 3) {
      for (let playerMovesKey in playerResult.playerMoves) {
        _playerMovesKey = playerMovesKey as keyof playerMoves;

        if (playerResult.playerMoves[_playerMovesKey] === 2) {
          playerResult.playerVersus[_key][_playerMovesKey]++;
        }
      }
    }
  }
  return playerResult;
};
