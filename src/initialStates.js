// these are preconfigured initial states that can be provided to the game 
// instead of relying on make2DArray();
import { make2DArray, make2DArrayEmpty, placePatternOnGrid } from "./gameLogic";

const emptyBaseGrid = make2DArrayEmpty(50,50);
export const random = make2DArray(50,50);

// these are only working when the grid is perfectly square, I don't get it...
const basicGliderPattern = [[0,1,0],[0,0,1],[1,1,1]]
export const altGlidePattern = placePatternOnGrid(emptyBaseGrid,basicGliderPattern )

const rPentominoPattern = [[0,1,1],[1,1,0],[0,1,0]]
export const altRPentomino = placePatternOnGrid(emptyBaseGrid, rPentominoPattern)

export const longestLiving = [
  [1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1]
];
