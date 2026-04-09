let bag = [1, 2, 3, 4, 5, 6, 7];

function shuffleBag() {
  let bag = [1, 2, 3, 4, 5, 6, 7];

  for (let i = bag.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]]; // swap
  }
}

shuffleBag();
console.log(bag);

//1 = I Block
//2 = O Block
//3 = T Block
//4 = S Block
//5 = Z Block
//6 = J Block
//7 = L Block