import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: var(--white);
  border-radius: 4px;
  margin: 24px auto;
  width: 100%;
  box-shadow: 0px 1px 2px 0px #00000014;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  padding: 12px 24px;
`

export const SearchWrapper = styled.div`
  border-top: 1px solid var(--borderColor);
  padding: 32px 24px;
  width: 100%;
`

export const OptionWrapper = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    grid-gap: 10px;
  }
`

export const OptionLabel = styled.label`
  align-items: center;
  color: var(--darkGrey);
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  margin-right: 7%;
`

export const CheckBox = styled.input`
  height: 16px;
  margin-right: 10px;
  width: 16px;
`

export const SearchInput = styled.input`
  background-color: var(--inputBg);
  background-image: url(/assets/svg/search-icon.svg);
  background-position: 8px center;
  background-repeat: no-repeat;
  background-size: 20px;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  height: 36px;
  margin-top: 20px;
  padding: 8px 36px;
  width: 100%;

  &:focus-visible {
    outline: 0;
  }
`
