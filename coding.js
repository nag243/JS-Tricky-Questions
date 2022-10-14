// for (var i = 1; i <= 5; i++) {
//   function close(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, x * 1000);
//   }
//   close(i);
// }

// Higher order function
const radius = [3, 2, 1, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area), "Area of radius");
console.log(calculate(radius, circumference), "Circumference of radius");
console.log(calculate(radius, diameter), "Diameter of radius");

// map, filter and reduce function examples

const arr = [2, 4, 3, 6, 8, 9, 2, 4];

// find max by using for loop
const findMax = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax(arr));

// find max by using reduce method
const output = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log("max with reduce", output);

// sum of arr element by using for loop
const sumOfArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log("sum of array", sumOfArr(arr));

// sum of arr elements by using reduce method
const sumOfArray = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log("sum by reduce", sumOfArray);

// find min by using reduce method
const min = arr.reduce((acc, curr) => {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
});
console.log("min", min);

// compare times of arr elememt by reduce
const compare = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(compare);

const users = [
  { firstName: "Pankaj", lastName: "Mishra", age: 26 },
  { firstName: "Sunil", lastName: "Singh", age: 35 },
  { firstName: "Rahul", lastName: "Mishra", age: 26 },
  { firstName: "Astha", lastName: "Singh", age: 30 },
  { firstName: "Harsh", lastName: "Mishra", age: 4 },
];

// get full name with map()
const fullName = users.map((x) => {
  return x.firstName + " " + x.lastName;
});
console.log("Users full name", fullName);

// filter users which age < 30 with filter()
const filterAge = users.filter((x) => {
  return x.age < 30;
});
console.log(filterAge);

// find first name which age < 30 by using filter() and map() method
const ageBellow30 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(ageBellow30);

// find first name which age < 30 by using reduce method

const ageLessthan30 = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    // acc=[...acc, curr.firstName ];
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(ageLessthan30);

// Function currying example - functions that transforming several arguments
// currying with bind method
const multiply = (x, y) => {
  return x * y;
};

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));

const multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));

let add = function(x){
  return function(y){
    console.log(x + y);
  }
}
let addByTwo = add(2);
addByTwo(3);

// Sum of multiple function arguments sum(2)(4)(5)(6)()

// function sum(a){
//     return function(b){
//         if(b){
//             return sum(a+b);
//         }
//         return b;
//     }
//     return a;
// }

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 4];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

//

(function () {
  var x = 20;
  (function () {
    x++;
  })();
  console.log(x, "closer");
  // x = 21;
})();

let person = {
  name: "Pankaj",
  f: function () {
    var self = this;
    console.log(this.name);
    console.log(this.name);
  },
};
person.f();

//////////////////////////////////////
const array = [3, 3, 3];
array.push(1);

const arr1 = [3, 3, 3];
// arr1 = []; // assignment of constant variable is not allowed

const arr2 = [3, 3, 3];
arr2[1] = 5; // Op - 3, 5, 3

console.log(array);
console.log(arr2);
/////////////////////
var obj = {
  name: "neha",
  getName: function () {
    console.log(this.name);
  },
};
var getName = obj.getName;
var obj2 = { name: "naina", getName };
obj.getName();
obj2.getName();
///////////////////////////////////
const person2 = { name: "neha" };
const array2 = [person2, person2, person2];
console.log(array2);
array2[1].name = "";
console.log(array[0].name);

// copy arr element in other array and adding new element at specific position in between that element

const numberArr = [1, 2, 3];
const index = numberArr.indexOf(2);
const addedArr = [...numberArr.slice(0, index), 4, ...numberArr.slice(index)];
console.log(addedArr);

// updating the array
const updated = numberArr.map((n) => {
  return n === 2 ? 20 : n; // updated 20 in place of 2
});
console.log(updated);

// removing array element
const remove = numberArr.filter((n) => {
  return n !== 2;
});
console.log(remove); // return all array elem except 2

function abc() {
  var x = 100;
  console.log(x);
}
abc();


const nArr = [1, 2, 5, 4, 6, 2, 5];

// Update all the Elements in an Array using map()

const array3 = ["zero", "one", "two"];
const updtArr = array3.map((elem, index) => {
  return elem + index;
});
console.log(updtArr);
const updtArr2 = array3.map((elem, index) => {
  return (elem[index] = 1);
});
console.log(updtArr2);

// convert array into string
var arr3 = ["Google", "is", "no", "1", "search engine"].toString();
// arr3.replace(/,/g," ")
console.log(arr3.replace(/,/g, " "));

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));

var animal = ["cow", "hourse"];
animal.push("cat");
animal.push("goat", "dog", "rat");
console.log(animal.length);

//
const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
firstArr.push.apply(firstArr, secondArr);
console.log(firstArr); // [1,2,3,4,5,6]

// find 2nd largest no from an array

const randomArr = [3, 5, 2, 40, 50, 90, 30];
const secondLargest = (arr) => {
  const maxElem = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(maxElem), 1);
  return Math.max.apply(null, arr);
  // console.log(maxElem);
};
console.log(secondLargest(randomArr));

// find 2nd smallest no from an array

const secondSmallest = (arr) => {
  const minElem = Math.min.apply(null, arr);
  arr.splice(arr.indexOf(minElem), 1);
  return Math.min.apply(null, arr);
  // return console.log(minElem);
};
console.log(secondSmallest(randomArr));

// ES6 destructuring with Array and Object

const user = {
  name: "Pankaj Mishra",
  age: 26,
  email: "mishra.pankaj43@gmail.com",
  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  },
};
console.log(user);
// const { name, age, email } = user;
// const {address: {city, state, country}} = user // inner lavel destructuring
// console.log(city, state, country);

console.log(
  [1, 2, 3].map((num) => {
    if (typeof num === 'number') return;
    return num * 2;
  })
);

const wordArr = [
  "Mango",
  "Banana",
  "Orange",
  "Papaya",
  "Grapes",
  "pomgranate",
];
const getMaxWord = wordArr.filter((item) => {
  let maxWord = 0;
  if (item.length > maxWord) {
    maxWord = item;
  }
  return maxWord;
});

console.log(getMaxWord, "Max Word");


let favDrink = ['I', 'like', 'milkshake.'];

favDrink.splice(2, 0, 'banana'); //at index position 2, insert 'banana'. 
                                 //***Does not replace 'milkshake'***

console.log(favDrink.join(' '));


const wordArr2 = ["Mango", "Banana", "Orange", "Papaya", "Grapes", "pomgranate"];

const str = "javascript is my favourite language";
// function longestWord(str) {
//   var splitArr = str.split(" ");
//   splitArr.sort((a, b) => {
//     return b.length - a.length;
//   });
//   return splitArr[0];

// alternate

// return Math.max(...str.split(' ').map(word => word.length))
// }
// console.log(longestWord(str));

function longestStringReduce(arr) {
  return arr.reduce((a, b) => (a.length < b.length ? b : a), "");
}

console.log(longestStringReduce(wordArr2));

function addBinary(a, b){
  return (a + b).toString(10);
}
console.log(addBinary(10, 1));

let cc = '2345678956789';
const maskify = (str) =>{
  return str.split('').map((letter, index) => index < str.length -4 ? '#' : letter).join('')
}

console.log(maskify(cc)); // ############6789

// longest word from string
const strWord = "JavaScript is most popular language";
const strArr = strWord.split(" ")
const longestStr = strArr.reduce((acc, curr) => {
  return acc.length > curr.length ? acc : curr
});
console.log(longestStr);

// return common word from 2 different string

var str1 = "United state of America";
var str2 = "United state of Kingdom";
const res1 = str1.split(" ");
const res2 = str2.split(" ");

// by using for loop
const common = [];
for (let i = 0; i < res1.length; i++) {
  for (let j = 0; j < res2.length; j++) {
    if (res1[i] == res2[j]) {
      common.push(res1[i]);
    }
  }
}
console.log("common word with for loop", common);

// by using filter method
let common2 = res1.filter((item) => {
  return res2.indexOf(item) > -1;
});
console.log('common word with filter', common2);

// return longest common word from 2 different string
// by using filter and reduce method

let longestCommon = res1.filter((item) => {
  return res2.indexOf(item) > -1;
}).reduce((acc, curr) => {
  return acc.length > curr.length ? acc : curr;
})
console.log('longest Common word =', longestCommon);

// sort array element without sort method
const numArr = [30, 2, 5, 9, 10, 1, 7];
for(let i = 0; i < numArr.length; i++){
  for(let j = i + 1; j < numArr.length; j++){
    if(numArr[i] > numArr[j]){
      let temp = numArr[i];
      numArr[i] = numArr[j];
      numArr[j] = temp;
    }
  }
}
console.log(numArr)

// flatMap

const number = [0, 3, 6];
const doubled = number.filter((num) => {
	return num !== 0
}).map((num) => {
return num * 2;
})

console.log(doubled);

const doubled2 = number.flatMap((num) => {
return num === 0 ? [] : num * 2
})

console.log(doubled2)

