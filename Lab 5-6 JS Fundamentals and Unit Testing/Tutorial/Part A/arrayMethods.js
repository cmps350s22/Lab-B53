let matrix = [12, -11, 11, 10, -5];

const flattened = matrix.flat(Infinity)

flattened.forEach(a => console.log(a ** 3))
const mappedElements = flattened.map(a => a ** 3)
const firstNegativeNumber = flattened.find(a => a < 0)
const allNegativeNumbers = flattened.filter(a => a < 0)

console.log(allNegativeNumbers)
