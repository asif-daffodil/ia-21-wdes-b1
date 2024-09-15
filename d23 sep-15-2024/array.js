const cityArr = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
console.log(cityArr[2]);
console.log(cityArr.length);
console.log(cityArr[cityArr.length - 1]);
console.log(cityArr.indexOf("Chicago"));
console.log(cityArr.push("Philadelphia", "San Antonio"));
console.log(cityArr.pop());
console.log(cityArr.shift());
console.log(cityArr.unshift("Miami", "Boston"));

for (let i = 0; i < cityArr.length; i++) {
    console.log(cityArr[i]);
}

cityArr.forEach(function(city){
    console.log(city);
});

cityArr.map(function(city){
    console.log(city);
});