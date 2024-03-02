import { nextGeneration, make2DArray } from '../src/gameLogic.js';

describe('nextGeneration()', () => {
  test('should return an new array (generation) of same dimensions as previous generation', () => {
    const firstGeneration = make2DArray(3,3);
    const secondGeneration = nextGeneration(firstGeneration);
    expect(secondGeneration.length).toEqual(3)
    expect(secondGeneration[0].length).toEqual(3);    
  })

  test('value of each element in grid should be either 0 or 1', () => {
    const firstGeneration = make2DArray(3,3);
    const secondGeneration = nextGeneration(firstGeneration);
    secondGeneration.forEach((row, index) => {
      secondGeneration[index].forEach((cellValue) => {
        expect(cellValue === 0 || cellValue === 1).toBe(true)
      })
    });   
  })

  test('should return the same array if all cells are dead', () => {
    const prevGen = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const result = nextGeneration(prevGen);
    expect(result).toEqual(prevGen);
  });

  test('if a cell is alive and neighboorhood contains less than 2 live cells, cell should die', () => {
    const firstGen = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    
    const secondGen = nextGeneration(firstGen);
    const cellBeingTested = secondGen[1][1];
    expect(cellBeingTested).toEqual(0);
  });

  test('if a cell is alive and neighboorhood contains either 2 or 3 live cells, cell should live', () => {
    const firstGen = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ];
    
    const secondGen = nextGeneration(firstGen);
    const cellBeingTested = secondGen[1][1];
    expect(cellBeingTested).toEqual(1);
  });

  test('if a cell is alive and neighboorhood contains more than 3 live cells, cell should die', () => {
    const firstGen = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ];
    
    const secondGen = nextGeneration(firstGen);
    const cellBeingTested = secondGen[1][1];
    expect(cellBeingTested).toEqual(0);
  });

  test('if a cell is dead and neighboorhood contains exactly 3 live cells, cell should live', () => {
    const firstGen = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ];
    
    const secondGen = nextGeneration(firstGen);
    const cellBeingTested = secondGen[1][1];
    expect(cellBeingTested).toEqual(1);
  });

})