import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px #00000014;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 24px auto 15px;
  padding: 14px 24px;
  width: 100%;

  @media (max-width: 800px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`

export const InfoWrapper = styled.div``

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const TagsWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-gap: 10px;
  width: 100%;

  @media (max-width: 800px) {
    display: block;
  }
`

export const Tag = styled.span`
  background-color: var(--bgAqua);
  border-radius: 4px;
  color: var(--aqua);
  display: inline-block;
  font-weight: 500;
  padding: 6px 9px;

  @media (max-width: 800px) {
    margin: 0 10px 10px 0;
  }
`

export const Category = styled.h3`
  color: var(--darkGrey);
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`
