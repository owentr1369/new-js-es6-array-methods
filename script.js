const items = [
  { name: "Bike", price: 200 },
  { name: "TV", price: 300 },
  { name: "Album", price: 50 },
  { name: "Book", price: 20 },
  { name: "Keyboard", price: 150 },
];

// 1. Filter method
// const filterArray = items.filter((item) => {
//   return item.price > 100;
// });
// console.log(filterArray);

// 2. Map method
// const mapArray = items.map((item) => {
//   return item.name;
// });
// console.log(mapArray);

// 3. Find method
// const findMethod = items.find((item) => {
//   return item.price === 100;
// });
// console.log(findMethod);
// undefined if false

// 4.forEach method
// items.forEach((item) => {
//   console.log(item.price);
// });

// 5. some method
// const someMethod = items.some((item) => {
//   return item.price > 300;
// });
// console.log(someMethod);
// Output = false

// 6. every method
// const everyMethod = items.every((item) => {
//   return item.price > 10;
// });
// console.log(everyMethod);
// Output = true

// 7. reduce method
// const reduceMethod = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);
// console.log(reduceMethod);
// Output = 720
// 0 : initial value of currentTotal

// 8. includes method
// const item2 = [1, 3, 5, 6, 2, 6, 7];
// const includeMethod = item2.includes(6);
// console.log(includeMethod);
// Output = true
