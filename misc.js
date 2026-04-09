// Check if the piece can move in the given direction
function canMove(piece, grid, dRow, dCol) {
  for (let r = 0; r < piece.shape.length; r++) {
    for (let c = 0; c < piece.shape[r].length; c++) {
      if (piece.shape[r][c] === 1) {
        let newRow = piece.row + r + dRow;
        let newCol = piece.col + c + dCol;

        // out of bounds
        if (
          newRow >= grid.length ||
          newCol < 0 ||
          newCol >= grid[0].length
        ) {
          return false;
        }

        // collision with placed block
        if (newRow >= 0 && grid[newRow][newCol] === 1) {
          return false;
        }
      }
    }
  }
  return true;
}
// Move the piece down
if (canMove(piece, grid, 1, 0)) {
  piece.row++;
} else {
  lockPiece(piece, grid);
  piece = spawnNewPiece();
}

// Lock the piece into the grid
function lockPiece(piece, grid) {
  for (let r = 0; r < piece.shape.length; r++) {
    for (let c = 0; c < piece.shape[r].length; c++) {
      if (piece.shape[r][c] === 1) {
        let gridRow = piece.row + r;
        let gridCol = piece.col + c;

        if (gridRow >= 0) {
          grid[gridRow][gridCol] = 1;
        }
      }
    }
  }
}
