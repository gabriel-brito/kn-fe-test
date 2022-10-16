export const filterByCategory = (data: any[], category: string) => {
  const result: any = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].category === category) {
      result.push(data[i])
    }
  }

  return result
}

export const filterByTerm = (data: any[], term: string) => {
  const result: any = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].productName.toLowerCase().includes(term.toLocaleLowerCase())) {
      result.push(data[i])
    }
  }

  return result
}
