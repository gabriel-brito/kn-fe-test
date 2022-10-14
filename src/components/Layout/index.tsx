import { ReactNode } from 'react'
import Container from 'components/Container'
import * as S from './styles'

type LayoutTypes = {
  children: ReactNode
}

export default function Layout({ children }: LayoutTypes) {
  return (
    <S.Wrapper>
      <Container>{children}</Container>
    </S.Wrapper>
  )
}
