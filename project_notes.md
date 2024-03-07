# Project Notes

- cells exist in an neighborhood, 
  - cells will be in one of two states, alive/dead, true/false
  - at its simplest a neighborhood will be 1 dimensional, 3 horizontal cells
  - 

- Determining states for first generation
  - in a 1*3 neighborhood, 2^3 states are possible, 8 states are possible.
  - 

## Rules for Conway's Game of Life
- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Questions
- What does `npm run preview` do? When I run it, it looks like a server has been started at `http://127.0.0.1:4173/` but if I visit in the browser it says that now page was found there.

