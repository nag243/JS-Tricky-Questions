const sum1 = function (a) {
  return function (b) {
    if (b) {
      return sum1(a + b);
    }
    return a;
  };
};

console.log(sum1(2)(3)(4)());

function sayHello(){
  return 'Hello ' + this.name;
}
const obj1 = {
  name: 'pankaj'
}

console.log(sayHello.call(obj1));

const person = {
  name: 'Astha',
  getAge: function(){
    return this.age
  }
}
const person2 = {
  age: 30
}

console.log(person.getAge.call(person2))

