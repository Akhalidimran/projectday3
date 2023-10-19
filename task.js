let obj1 = {name: "car", age: 15, location: "chennai"};
let keys1 = Object.keys(obj1);
console.log(keys1);


let obj2 = {name: "bike", age: 10, location: "trichy"};
let keys2 = Object.keys(obj2);
console.log(keys2);


if (JSON.stringify(keys1) === JSON.stringify(keys2))
{
    console.log("equal");
}
else
{
    console.log("not equal!");
};



