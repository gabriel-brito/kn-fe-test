import { useState, useMemo } from 'react'

import SearchFields from 'components/SearchFields'
import ProductData from 'components/ProductData'

import { filterByCategory, filterByTerm } from 'utils/filter'
import { data } from 'mocks/data'

import * as S from './styles'

export default function SearchWrapper() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [term, setSearchTerm] = useState('')

  const handleCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('')

      return
    }

    setSelectedCategory(category)
  }

  const handleInput = (searchTerm: string) => {
    if (!searchTerm) {
      setSearchTerm('')

      return
    }

    const value = searchTerm.trim()

    setSearchTerm(value)
  }

  const filteredProducts = useMemo(() => {
    if (selectedCategory && !term) {
      return filterByCategory(data, selectedCategory)
    }

    if (!selectedCategory && term) {
      return filterByTerm(data, term)
    }

    if (selectedCategory && term) {
      const filteredByCategory = filterByCategory(data, selectedCategory)

      return filterByTerm(filteredByCategory, term)
    }

    return []
  }, [selectedCategory, term])

  return (
    <>
      <SearchFields
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
        handleInput={handleInput}
      />

      <S.List>
        {filteredProducts.length > 0 &&
          filteredProducts.map((product: any, index: number) => (
            <S.ListItem key={`product-${index}`}>
              <ProductData handler={() => {}} {...product} />
            </S.ListItem>
          ))}
      </S.List>
    </>
  )
}
