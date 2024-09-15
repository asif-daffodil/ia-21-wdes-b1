/**
 * starting point
 * ending point
 * increment
 * task
 */

//  while loop
let y = 1;
while (y <= 10) {
  console.log("2 x " + y + " = " + 2 * y);
  y++;
}

// for loop
for (let i = 1; i <= 10; i++) {
  console.log("3 x " + i + " = " + 3 * i);
}

let count = 0; 
for (let i = 7; i <= 1000; i++) {
    if(i % 7 == 6){
        console.log(i);
        count++;
    }   
}
console.log("Total number of count: " + count);

