import { make2DArray } from '../src/changeFunction.js';

describe('make2DArray()', () => {
  test('should create a two dimensional array', () => {
    const newArray = make2DArray(5,5);
    expect(newArray.length).toEqual(5)
    expect(newArray[0].length).toEqual(5);
  })

  test('first argument should determine number of colums in array, (determines the number of items in a row)', () => {
    const newArray = make2DArray(3,5);
    expect(newArray[0].length).toEqual(3);
  })

  test('second argument should determine number of row in array, (determines the number of rows)', () => {
    const newArray = make2DArray(3,5);
    expect(newArray.length).toEqual(5);
  })

  test('value of each element in grid should be either 0 or 1', () => {
    const newArray = make2DArray(5,5);
    newArray.forEach((row, index) => {
      newArray[index].forEach((cellValue) => {
        expect(cellValue === 0 || cellValue === 1).toBe(true)
      })
    });
    
  })
})