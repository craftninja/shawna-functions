
// write a function that takes an array of numbers and compares them to a value and returns xxxxxxx

// inStock? takes an string, and an object that looks kinda like this:
// {
//   'Anna Maria Horner something fabric': 12,
//   'Kona Cotton cerise': 30,
// }
// and a string of the fabric someone is looking for, like 'Anna Maria Horner something fabric'
// returns "12 yards" if in stock,
// returns "currently out of stock" if 0 yards are available,
// and "Oh, we haven't carried that before" if it is not in the object.

console.log((function (inventory, searchItem){
  for (fabric in inventory) {
    if (fabric === searchItem) {
      if (inventory[fabric] === 0) { return "currently out of stock" }
      return `${inventory[fabric]} yards`
    }
  }
  return "oh shit"
})(
  {
    'Anna Maria Horner something fabric': 12,
    'Kona Cotton cerise': 30,
    'Best fabric evah': 0,
  },
  'Anna Maria Horner something fabric'
  // 'Best fabric evah'
  // 'bullshit'
))

// remember to also test for something that does not exist, and something that has 0 yards
