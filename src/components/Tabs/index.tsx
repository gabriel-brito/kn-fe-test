import * as S from './styles'

type TabsTypes = {
  actualStep: number
  handleStep: (step: number) => void
}

export default function Tabs({ actualStep, handleStep }: TabsTypes) {
  return (
    <S.Wrapper data-testid="tabs-wrapper">
      <S.ListWrapper>
        <S.ListItem>
          <S.Button
            aria-label="product-tab-button"
            isActive={actualStep === 1}
            onClick={() => handleStep(1)}
          >
            1 Product
          </S.Button>
        </S.ListItem>

        <S.ListItem>
          <S.Button
            aria-label="addresses-tab-button"
            isActive={actualStep === 2}
            onClick={() => handleStep(2)}
          >
            2 Addresses
          </S.Button>
        </S.ListItem>

        <S.ListItem>
          <S.Button
            aria-label="overview-tab-button"
            isActive={actualStep === 3}
            onClick={() => handleStep(3)}
          >
            Overview
          </S.Button>
        </S.ListItem>
      </S.ListWrapper>
    </S.Wrapper>
  )
}
