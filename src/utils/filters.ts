import { ProductDataTypes } from 'types/data'

export const filterByCategory = (
  data: ProductDataTypes[] | [],
  category: string
) => {
  const result: ProductDataTypes[] = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].category === category) {
      result.push(data[i])
    }
  }

  return result
}

export const filterByTerm = (data: ProductDataTypes[] | [], term: string) => {
  const result: ProductDataTypes[] = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].productName.toLowerCase().includes(term.toLocaleLowerCase())) {
      result.push(data[i])
    }
  }

  return result
}
