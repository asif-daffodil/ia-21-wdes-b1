const myPromise = new Promise(function (res, rej) {
    if (Math.random() * 100 <= 50) {
        res('Hello, Promises!');
    }
    rej(new Error('Something went wrong'));
});

/* 
myPromise.then(function (val) {
    console.log(val);
}).catch(function (err) {
    console.log(err.message);
});
*/


//  call async function

const saiful = async function () {
    await myPromise.then(function (val) {
        console.log(val);
    }).catch(function (err) {
        console.log(err.message);
    });
}
saiful();
// let, const
// fat arrow function

/* 
function shanta() {
    return "Shanta is not
}
 */
const shanta = () =>  "Shanta is not a bad girl";

// Template Literals
const name = 'Saiful';
const age = 25;

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);

// Destructuring
jihadInfo = ['Jihad', 25, 'Dhaka'];
const [fullName, realAge, bari] = jihadInfo;

console.log(fullName);

const tishaInfo = {
    stdName: 'Tisha',
    stdAge: 25,
    address: 'Dhaka'
};

console.log(tishaInfo.name);

const {stdName, stdAge, address} = tishaInfo;

// Spread Operator
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1, 5, 6, 7];