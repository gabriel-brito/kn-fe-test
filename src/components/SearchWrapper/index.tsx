import { useState } from 'react'

import SearchFields from 'components/SearchFields'
import ProductData from 'components/ProductData'

import { data } from 'mocks/data'

export default function SearchWrapper() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategory = (category: string) => {
    console.log(category)

    if (category === selectedCategory) {
      setSelectedCategory('')

      return
    }

    setSelectedCategory(category)
  }

  const handleInput = (searchTerm: string) => {
    if (!searchTerm) return

    const value = searchTerm.trim()

    console.log(value)
  }

  return (
    <>
      <SearchFields
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
        handleInput={handleInput}
      />

      {data.map((product, index) => (
        <ProductData key={`product-${index}`} handler={() => {}} {...product} />
      ))}
    </>
  )
}
