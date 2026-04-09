let piece = 0;




function update() {
    if (bag.length === 0) {
        shuffleBag();
    }
    if (piece === 0) {
        piece = bag.pop();
    }
    console.log(piece);
    console.log(bag);
    if (piece === 1) {
        console.log('I');
        let piece = {
            Shape: [
                [1],
                [1],
                [1],
                [1]
                ],
                row: 0,
                col: 4
            }
    } else if (piece === 2) {
        console.log('O');
        let piece = {
            Shape: [
                [1, 1],
                [1, 1] 
                ],
                row: 0,
                col: 4
            }
    } else if (piece === 3) {
        console.log('T');
        let piece = {
            Shape: [
                [1, 1, 1],
                [0, 1, 0]
                ],
                row: 0,
                col: 4
            }
    } else if (piece === 4) {
        console.log('S');
        let piece = {
            Shape: [
                [0, 1, 1],
                [1, 1, 0]
                ],
                row: 0,
                col: 4
            }
    } else if (piece === 5) {
        console.log('Z');
        let piece = {
            Shape: [
                [1, 1, 0],
                [0, 1, 1]
                ],
                row: 0,
                col: 4
            }
    } else if (piece === 6) {
        console.log('J');
        let piece = {
            Shape: [
                [0, 1],
                [0, 1],
                [1, 1]
                ],
                row: 0,
                col: 4
            }
    } else if (piece === 7) {
        console.log('L');
        let piece = {
            Shape: [
                [1, 0],
                [1, 0],
                [1, 1]
                ],
                row: 0,
                col: 4
            }
    }
}

setInterval(() => {
  update();
}, 500);