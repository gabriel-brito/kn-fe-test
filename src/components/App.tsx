import { useState } from 'react'

import Layout from 'components/Layout'
import Information from 'components/Information'
import Tabs from 'components/Tabs'
import SearchWrapper from 'components/SearchWrapper'
import ProductModal from 'components/ProductModal'

export default function App() {
  const [actualStep, setActualStep] = useState(1)

  const handleStep = (newStep: number) => {
    if (newStep === actualStep) return

    setActualStep(newStep)
  }

  return (
    <Layout>
      <Information />
      <Tabs actualStep={actualStep} handleStep={handleStep} />
      <SearchWrapper />
      <ProductModal showModal={true} productData={{}} closeModal={() => {}} />
    </Layout>
  )
}
