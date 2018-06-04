import { arrayMerge } from '../../../App/Utils/helper/datamining'

test('arrayMerge', () => {
  const receive = arrayMerge([[1, 2], [2, 3]])
  const exp = [1, 2, 3]
  expect(exp).toEqual(receive)
})
