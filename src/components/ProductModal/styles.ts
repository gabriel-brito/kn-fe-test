import styled from 'styled-components'

export const Modal = styled.div`
  background-color: var(--white);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.24);
  max-width: 420px;
  width: 100%;
  color: var(--black);
`

export const Header = styled.header`
  border-bottom: 1px solid var(--borderColor);
`

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
`

export const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;

  & > svg {
    font-size: 24px;
  }
`

export const Content = styled.div`
  padding: 20px 24px;
  overflow-y: scroll;
`

export const ProductTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const TagsWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
`

export const Tag = styled.span`
  background-color: var(--bgAqua);
  border-radius: 4px;
  color: var(--aqua);
  display: inline-block;
  font-weight: 500;
  margin: 0 10px 10px 0;
  padding: 6px 9px;
`

export const ManufacturerLink = styled.a`
  background-color: var(--aqua);
  border-radius: 4px;
  color: var(--white);
  display: block;
  margin-bottom: 15px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  width: fit-content;
`

export const ProductDescription = styled.p`
  line-height: 24px;
  margin-bottom: 20px;
`

export const OptionLabel = styled.label`
  cursor: pointer;
  display: block;
  margin-bottom: 20px;
`

export const RadioWrapper = styled.div`
  align-items: center;
  color: var(--black);
  display: flex;
`

export const Radio = styled.input`
  margin-right: 10px;
`

export const OptionDescription = styled.p`
  line-height: 24px;
`
