const tilesService = require('../services/tiles.service')

test('computeDrawPile should return an array', () => {
  expect(Array.isArray(tilesService.computeDrawPile())).toBeTruthy()
})

test('computeDrawPile should return an empty array if no argument is given', () => {
  expect(tilesService.computeDrawPile().length).toEqual(0)
})

test('computeDrawPile length should be equal to given argument', () => {
  expect(tilesService.computeDrawPile(24).length).toEqual(24)
})

test('computeDrawPile length should not be greater then 48', () => {
  expect(tilesService.computeDrawPile(94).length).not.toBeGreaterThan(48)
})

// test.each(tilesService.computeDrawPile(24))(
//   'each item is an object', (item) => {
//     expect(typeof item).toBe('object');
//   },
// );