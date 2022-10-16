import { useState, useMemo, lazy } from 'react'

import SearchFields from 'components/SearchFields'
import ProductData from 'components/ProductData'

import { filterByCategory, filterByTerm } from 'utils/filters'
import { ProductDataTypes } from 'types/data'

import { data } from 'mocks/data'

import * as S from './styles'

const ProductModal = lazy(() => import('components/ProductModal'))

export default function SearchWrapper() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [term, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<ProductDataTypes>()
  const [showModal, setShowModal] = useState(false)

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

  const handleOpenModal = (product: ProductDataTypes) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const filteredProducts = useMemo((): ProductDataTypes[] | [] => {
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
          filteredProducts.map((product, index: number) => (
            <S.ListItem key={`product-${index}`}>
              <ProductData
                handler={() => handleOpenModal(product)}
                {...product}
              />
            </S.ListItem>
          ))}
      </S.List>

      <ProductModal
        showModal={showModal}
        productData={selectedProduct}
        closeModal={setShowModal}
      />
    </>
  )
}
