type Product = {
    name: string;
    price: number;
    category: string;
}

let productList: Product[] = [
    {name: 'Laptop', price: 50000, category: 'Electronics'},
    {name: 'Shirt', price: 1200, category: 'Apparel'},
    {name: 'Coffee Maker', price: 5000, category: 'Appliances'}
];



// declaring the function
function filterProductByPrice(products: Product[], minPrice: number):Product[] {
    return products.filter(product => product.price > minPrice);
    
}

function discountProduct(products: Product[]):Product[] {
    return products.map(product => ({...product, price: product.price * 0.9}));
}

// call the function
let finalProduct = discountProduct(filterProductByPrice(productList, 2000));

console.log(finalProduct);
