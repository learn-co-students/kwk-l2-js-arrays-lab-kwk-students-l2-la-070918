// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers;
}

function appendDriver(name) {
  var theName = [name]
  return drivers.concat(theName);
}

function prependDriver(name) {
  var newArr = drivers.slice(0);
  newArr.unshift(name);
  return newArr;
}

function removeLastDriver() {
  var newArr = drivers.slice(0);
  newArr.pop();
  return newArr;
}

function removeFirstDriver() {
  var newArr = drivers.slice(0);
  newArr.shift();
  return newArr; 
}