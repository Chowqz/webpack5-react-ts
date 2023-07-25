import { add } from '@/util'

test('util add 1 + 2', () => {
  expect(add(1, 2)).toBe(3)
})

test('util add 3 + 2', () => {
  expect(add(3, 2)).toBe(5)
})
