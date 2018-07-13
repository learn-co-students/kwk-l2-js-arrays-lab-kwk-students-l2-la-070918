// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(){
  drivers.push("Ralph")
}
function destructivelyPrependDriver(){
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(name){
  var clone = drivers.slice(0)
  clone.push(name)
  return clone
}
function prependDriver (name){
 var clone = drivers.slice(0)
 clone.unshift(name)
 return clone
}
function removeLastDriver (){
 var clone = drivers.slice(0)
 clone.splice(-1,1)
 return clone
}
function removeFirstDriver (){
 var clone = drivers.slice(0)
 clone.shift(0)
 return clone
}