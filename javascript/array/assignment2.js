var products = ['Tulsi', 'Cow Dung Cake', 'Doopam', 'Panchagavya', 'Desi cow Ghee'];
console.log(products);

var filterProducts = [];
for(var item of products){
    if(item.toLowerCase().includes('cow')){
        filterProducts.push(item);
    }
}

console.log(filterProducts);
// in other way
var filterProducts2 = products.filter(function(item){
    return item.toLowerCase().includes('cow');
});
console.log(filterProducts2);