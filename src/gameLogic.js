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
      const livingNeighbors = countLiveNeighbors(prevGen, i, j)
      const prevCell = prevGen[i][j];             
      let nextGenCell;

      if (prevCell === 1 ){
        if (livingNeighbors === 2 || livingNeighbors === 3){
          nextGenCell = 1;
        } else {
          nextGenCell = 0;
        }
      } else {
        if (livingNeighbors === 3) {
          nextGenCell = 1;
        } else {
          nextGenCell = 0;
        }
      }
      
      nextGen[i][j] = nextGenCell;
    }
  }
  return nextGen;
}

const countLiveNeighbors = (grid, x, y) => {
  let count = 0;
  for (let i = -1; i <= 1; i++){
    for (let j = -1; j <= 1; j++) {
      let col = (x + i + grid.length) % grid.length;
      let row = (y + j + grid[0].length) % grid.length;
      count += grid[col][row];
    }
  }
  count -= grid[x][y];
  return count;
}
