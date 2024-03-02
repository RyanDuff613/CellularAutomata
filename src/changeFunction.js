export function make2DArray(cols, rows) {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++){
      row.push(Math.round(Math.random()))
    }
    grid.push(row);
  }
  return grid;
}



export function nextGeneration(prevGen){
  let nextGen = prevGen.map(innerArray => [...innerArray]);
  const numberOfRows = prevGen.length;
  for (let i = 0; i < numberOfRows; i++){
    // whatever we put between these brackets will run for each row of the grid
    // within this loop we can access the current row with prevGen[i]
    for (let j = 0; j < prevGen[i].length; j++){
      // whatever we put here will run for each element of the row
      // being accessed by the outer loop
      // we can access the current element with prevGen[i][j]
      const currentCell = prevGen[i][j];
      const rowAbove = prevGen[i-1] ? prevGen[i-1] : [0,0,0] // if there is a row above use it else assume dead cells
      const thisRow = prevGen[i];
      const rowBelow = prevGen[i+1] ? prevGen[i+1] : [0,0,0] // if there is a row below use it, else assume dead cells
      const neighborHood = [rowAbove[0],rowAbove[1],rowAbove[2],
                            thisRow[j-1] ? thisRow[j-1] : 0, thisRow[j+1] ? thisRow[j+1]: 0, // if the cells has neighbors to the left or right use those values, otherwise assume dead cells
                            rowBelow[0], rowBelow[1], rowBelow[2]];
      // console.table(i.toString()+ j.toString(), neighborHood );
      let nextGenElement;
      const livingCellsInNeighborHood = neighborHood.filter(value => value === 0).length
      // if currentElement is alive
          // if neighboorhood contains less than 2 live cells, currentElement dies
          // if neighboorhood contains 2 or 3 live cells, currentElement lives
          // if neighboorhood contains 3 or more live cells, currentElement dies
      // else if neighborhood contains exactly 3 live cells, currentElement comes to life
      
      if (currentCell) {
        if((livingCellsInNeighborHood < 2) || (livingCellsInNeighborHood >= 3) ){
          nextGenElement = 0;
        } else {
          nextGenElement = 1;
        }
      } else if (livingCellsInNeighborHood === 3) {
        nextGenElement = 1;
      }

      // nextGen[i][j] = nextGenElement;
    }
  }
  return nextGen;
}

const genZero = make2DArray(3,3);
const genTwo = nextGeneration(genZero);
