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
  for (let i = 0; i < prevGen.length; i++){
    for (let j = 0; j < prevGen[i].length; j++){
      // Needs a refactor. There has to be a better way to get all these values.
      const rowAbove = prevGen[i-1] ? prevGen[i-1] : [0,0,0] // if there is a row above use it else assume dead cells
      const thisRow = [(prevGen[i][j-1] ? prevGen[i][j-1] : 0), (prevGen[i][j-1] ? prevGen[i][j-1] : 0)]
      const rowBelow = prevGen[i+1] ? prevGen[i+1] : [0,0,0] // if there is a row below use it, else assume dead cells
      const neighborHood = [rowAbove[0],rowAbove[1],rowAbove[2],
                            thisRow[0],             thisRow[1], // if the cell has neighbors to the left or right use those values, otherwise assume dead cells
                            rowBelow[0],rowBelow[1],rowBelow[2]];
      const livingNeighbors = neighborHood.filter(value => value === 1).length
      
      const prevCell = prevGen[i][j];             
      let nextGenCell;
      if (prevCell) {
        if ((livingNeighbors < 2) || (livingNeighbors > 3)) {
          nextGenCell = 0;
        } else {
          nextGenCell = 1;
        }
      } else if (livingNeighbors === 3) {
        nextGenCell = 1;
      } else {
        nextGenCell = 0;
      }

      nextGen[i][j] = nextGenCell;
    }
  }
  return nextGen;
}
