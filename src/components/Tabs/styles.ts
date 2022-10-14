import styled from 'styled-components'

export const Wrapper = styled.nav``

export const ListWrapper = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;

  @media (max-width: 680px) {
    justify-content: space-between;
  }
`

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 33.33%;

  @media (min-width: 680px) {
    width: 150px;
  }
`

type ButtonProps = {
  isActive: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isActive ? 'var(--aqua)' : 'var(--disabledGrey)')};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? 'var(--aqua)' : 'var(--disabledGrey)')};

  &:hover {
    opacity: ${(props) => (props.isActive ? '1' : '0.75')};
    font-size: ${(props) => (props.isActive ? '16px' : '17px')};
  }
`
