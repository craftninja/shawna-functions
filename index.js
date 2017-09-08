module.exports = {
  inStock: (inventory, searchItem) => {
    for (fabric in inventory) {
      if (fabric === searchItem) {
        if (inventory[fabric] === 0) { return "currently out of stock" }
        return `${inventory[fabric]} yards`
      }
    }
    return "oh shit"
  },
  calculateCost: (nameOfFabric, yardage) => {
    return `please pretend something great happened with ${yardage} yards of ${nameOfFabric}`
  }
}

// in the parent directory of this repo:
// $ node
// > const ftc = require('./index.js')
// > ftc.inStock(
// ...
// ... {
// ...   'Anna Maria Horner something fabric': 12,
// ...   'Kona Cotton cerise': 30,
// ...   'Best fabric evah': 0,
// ... },
// ... 'Anna Maria Horner something fabric'
// ... )
//
// > ftc.calculateCost('something fabric', 10)


// can also test for:
// 'Best fabric evah'
// 'bullshit'
