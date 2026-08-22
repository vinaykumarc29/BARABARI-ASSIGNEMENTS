//Task 1

// let total = 0;
// //given in question
// function addToTotal(num) {
//   total += num;
// }

// function addPure(currTotal , num){
//     return currTotal + num;
// }

// let new_count = addPure(10,5);
// console.log(new_count);



//Task 2

// const grades = [85, 90, 78, 92, 88];

// let averageGrade = grades.reduce((prev, curr) => {
//   return prev + curr / grades.length;
// }, 0);

// console.log(averageGrade);

//Task 3

// const discountApplier = (price)=>{
//     return (discount)=>{
//         return price * (100-discount)/100;
//     }
// }

// let laptopPrice = discountApplier(10000);
// let finalLaptopPrice = laptopPrice(20);

// console.log(finalLaptopPrice);




//Task 4

// const products = [
//   { name: "Book", price: 200 },
//   { name: "Pen", price: 30 },
//   { name: "Laptop", price: 50000 },
//   { name: "Bag", price: 700 },
// ];

// const finalPrice = products
//   .filter((prod) => prod.price > 500)
//   .map((prod) => {
//     prod.price *= 0.9;
//     return prod.price;
//   })
//   .reduce((prev, curr) => {
//     return prev + curr;
//   });

// console.log(finalPrice);
