let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let maxNumber = array.length;
// while (count <= 10) {
//   console.log(count);
//   count++;
// }

// do {
//   console.log(count);
//   count++;
// } while (count <= 10);

for (let i = 0; i < maxNumber; i++) {
  if (array[i] % 2 == 0) {
    console.log("Четное число", array[i]);
  }
}
