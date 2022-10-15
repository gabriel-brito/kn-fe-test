import { useState } from 'react'

import Layout from 'components/Layout'
import Information from 'components/Information'
import Tabs from 'components/Tabs'
import SearchFields from 'components/SearchFields'

export default function App() {
  const [actualStep, setActualStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleStep = (newStep: number) => {
    if (newStep === actualStep) return

    setActualStep(newStep)
  }

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
    <Layout>
      <Information />
      <Tabs actualStep={actualStep} handleStep={handleStep} />
      <SearchFields
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
        handleInput={handleInput}
      />
    </Layout>
  )
}
