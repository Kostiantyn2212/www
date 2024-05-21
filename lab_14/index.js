let cities = ["Ternopil", "Lviv", "Warsaw"];
let result = cities.join("*");
console.log(result);

let number =[2,3,4,5];
let n_result=1;
for(let i=0; i<number.length; i++)
    {
        n_result*=number[i]
    }
 console.log(n_result);
i=0;
 while(i<number.length)
    {
        n_result*=number[i];
        i++;
    }
 console.log(n_result);

 function findMin(){
   let min= arguments[0];
   if(min>arguments[i])
    {
        min=arguments[i];
    } 
    console.log(min);
 }

 findMin(0,-9,3,9,-4,12);

function findUnique(arr) {
    let unique = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                unique = false;
                break;
            }
        }
        if (!unique) {
            break;
        }
    }
    return unique;
}

let numbers = [0, -9, 3, 9, -4, 12];
result = findUnique(numbers);
console.log(numbers, result);

numbers = [0, -9, 3, -9, -4, 12];
result = findUnique(numbers);
console.log(numbers, result);

result = findUnique(["Bob", "Bib", "Beb"]);
console.log(["Bob", "Bib", "Beb"], result); 

result = findUnique(["Beb", "Bib", "Beb"]);
console.log(["Beb", "Bib", "Beb"], result); 

let products=[{
    "name": "milk",
    "count": 32,
    "sold": true
},
{
    "name": "apple",
    "count": 20,
    "sold": false
},
{
    "name": "bread",
    "count": 40,
    "sold": true
},
{
    "name": "still water",
    "count": 30,
    "sold": false
}];

function outPut(arr){
    console.log("\n\n");
    for(i=0; i<arr.length; i++)
        {
            if(!arr[i].sold){
                console.log(arr[i]);
            }
        }
        for(i=0; i<arr.length; i++)
            {
                if(arr[i].sold){
                    console.log(arr[i]);
                }
            }
}
function addObj(product) {
    if (product.name !== "" && !isNaN(product.count) && product.sold !== undefined) {

        for (let i = 0; i < products.length; i++) {
            if (product.name === products[i].name) {
                products[i].count += product.count;
                products[i].sold = product.sold;
                outPut(products);
                return;
            }
        }

        products.push(product);
        outPut(products);
    }
}

function markAsPurchased(inputName) {
    

    if (inputName !== "") {
        for (let i = 0; i < products.length; i++) {
            if (inputName === products[i].name) {
                products[i].sold = true;
                products[i].count--;
                outPut(products);
                return;
            }
        }
        console.log("Product not found.");
    } else {
        console.log("Please select a product to mark as purchased.");
    }
}

outPut(products);
let product={
    "name": "banana",
    "count": 30,
    "sold": false
}
addObj(product);

markAsPurchased("banana");
