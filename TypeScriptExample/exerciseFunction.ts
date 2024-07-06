import { DevSettings, ProgressBarAndroidBase } from "react-native";
type Product = {
    name : string;
    price : number;
    category : string;
};

//decare array of product 
let product : Product[] = [
    {name: 'Laptop',price: 50000, category: 'Electronics'},
    {name: 'Shirt',price: 1200,category : 'Apparel'},
    {name: 'Coffee Maker',price: 2500,category : 'Appliances'}
];



//create functions
function filterProductByPrice(products : Product[], filnum : number): Product[] {
  return products.filter(product => product.price>filnum);  
}

function discountProduct(products : Product[]): Product[] {
  return products.map(product=>({...product,price:product.price * 0.9}));
}

//call functions
let filterProduct = filterProductByPrice(product,10000);
let DiscountProduct = discountProduct(filterProduct);
//console.log(filterProduct);
console.log(DiscountProduct);
