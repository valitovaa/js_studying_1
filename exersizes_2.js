//1) построение треугольника

let count =0;
let abc = "#";
for(let i=0; i<7; i++){
  console.log(abc);
  abc += "#"
  }

//2) FizzBuzz

for(let i=0; i<100;i++){
  if(i%3==0 && i%5 ==0){
    console.log("FizzBuzz");
  }else if(i%5 ==0){
    console.log("Buzz")
  }else if(i%3==0){
    console.log("Fizz")
  }else
  console.log(i);
 }


//3) шахматная доска

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

