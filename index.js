const callinIt = (inventory, searchItem) => {
  for (fabric in inventory) {
    if (fabric === searchItem) {
      if (inventory[fabric] === 0) { return "currently out of stock" }
      return `${inventory[fabric]} yards`
    }
  }
  return "oh shit"
}

module.exports = callinIt;

// in the parent directory of this repo:
// $ node
// > const callinIt = require('./index.js')
// > callinIt(
// ...
// ... {
// ...   'Anna Maria Horner something fabric': 12,
// ...   'Kona Cotton cerise': 30,
// ...   'Best fabric evah': 0,
// ... },
// ... 'Anna Maria Horner something fabric'
// ... )


// can also test for:
// 'Best fabric evah'
// 'bullshit'
