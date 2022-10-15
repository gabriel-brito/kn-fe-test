import { filterByCategory, filterByTerm } from 'utils/filter'
import { data } from 'mocks/data'

describe('filterByCategory', () => {
  it('should return 3 when the selected category is Software Development', () => {
    const category = 'Software Development'
    const result = filterByCategory(data, category)

    expect(result).toHaveLength(3)
  })

  it('should return 0 when the selected category is Management Tools', () => {
    const category = 'Management Tools'
    const result = filterByCategory(data, category)

    expect(result).toHaveLength(0)
  })

  it('should return 5 when the selected category is Daily Business', () => {
    const category = 'Daily Business'
    const result = filterByCategory(data, category)

    expect(result).toHaveLength(5)
  })
})

describe('filterByTerm', () => {
  it('should return 2 when the searched term is "Tech"', () => {
    const term = 'Tech'
    const result = filterByTerm(data, term)

    expect(result).toHaveLength(2)
  })

  it('should return 0 when the searched term is "aaaa"', () => {
    const term = 'aaaa'
    const result = filterByTerm(data, term)

    expect(result).toHaveLength(0)
  })

  it('should return 0 when the searched term is "te"', () => {
    const term = 'Te'
    const result = filterByTerm(data, term)

    expect(result).toHaveLength(3)
  })

  it('should return 3 when the searched term is "j"', () => {
    const term = 'j'
    const result = filterByTerm(data, term)

    expect(result).toHaveLength(3)
  })
})
