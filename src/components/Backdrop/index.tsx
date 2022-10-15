import { ReactNode } from 'react'

import * as S from './styles'

type BackdropTypes = {
  children: ReactNode
}

export default function Backdrop({ children }: BackdropTypes) {
  return <S.Backdrop data-testid="backdrop">{children}</S.Backdrop>
}
