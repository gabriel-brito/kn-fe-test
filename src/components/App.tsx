import { useState } from 'react'

import Layout from 'components/Layout'
import Information from 'components/Information'
import Tabs from 'components/Tabs'
import SearchWrapper from 'components/SearchWrapper'
import UnderConstruction from 'components/UnderConstruction'

export default function App() {
  const [actualStep, setActualStep] = useState(1)

  const tabPanel: { [key: number]: () => JSX.Element } = {
    1: SearchWrapper,
    2: UnderConstruction,
    3: UnderConstruction
  }

  const handleStep = (newStep: number) => {
    if (newStep === actualStep) return

    setActualStep(newStep)
  }

  const renderCurrentTab = (step: number) => {
    const TabPanel = tabPanel[step]

    return <TabPanel />
  }

  return (
    <Layout>
      <Information />
      <Tabs actualStep={actualStep} handleStep={handleStep} />
      {renderCurrentTab(actualStep)}
    </Layout>
  )
}
