// Create an empty array
const products = [];

// Push objects to the array & ID1 generation (normal)
products.push(
    {ID1:Math.ceil(Math.random()*100),Name:"mouse", Price:650, Quantity:20},
    {ID1:Math.ceil(Math.random()*100),Name:"keyboard", Price:850, Quantity:10},
    {ID1:Math.ceil(Math.random()*100),Name:"monitor", Price:12000, Quantity:2},
    {ID1:Math.ceil(Math.random()*100),Name:"ups", Price:6500, Quantity:6},
    {ID1:Math.ceil(Math.random()*100),Name:"system", Price:38000, Quantity:10},
    {ID1:Math.ceil(Math.random()*100),Name:"router", Price:4500, Quantity:4},
    {ID1:Math.ceil(Math.random()*100),Name:"printer", Price:13000, Quantity:0},
    {ID1:Math.ceil(Math.random()*100),Name:"scanner", Price:8000, Quantity:8}
)

console.log(products);

// ID2 Generation using function
// function generateId(){
//    var random = Math.ceil(Math.random()*100);
//     return random;
// }

// ID3 Generation using map()
// const id3AddedArray = products.map(items => {
//     var id = Object.assign({},items);
//     id.ID3 = Math.ceil(Math.random()*100);
//     return id;
// })

// console.log(id3AddedArray);


//search
let keyword = "MO";
let search = products.filter(items => items.Name.includes(keyword.toLowerCase()));

console.log(search);

// finding final price and add in to array using map(), log a new array.
const newProducts = products.map(items => {
    var fPrice = Object.assign({},items);
    fPrice.Final_Price = items.Price-(items.Price*0.1);
    return fPrice;
})

console.log(newProducts);

// sorting objects 
let sorted = newProducts.sort((lower,upper) => lower.Final_Price - upper.Final_Price);
console.log(sorted);


// remove the product, that has a quantity value 0
delete products[products.indexOf(products.find((items => items.Quantity==0)))];
console.log(products);


