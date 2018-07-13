// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver)
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop(4)
}

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift(0)
}

function appendDriver(driver) {
  return drivers.concat(driver);
}

function prependDriver(driver) {
  const array = [driver]
  return array.concat(drivers)
}

function removeLastDriver(driver) {
  return drivers.slice(0, (drivers.length - 1))
}

function removeFirstDriver(driver) {
  return drivers.slice((drivers.length - 2))
}

