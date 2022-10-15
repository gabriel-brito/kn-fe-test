import * as S from './styles'

const mock = {
  productName: 'Foxit software PhantomPDF Standard',
  tags: ['PDF', 'Change', 'Create', 'Maintenance', 'Business', 'FoxIT'],
  category: 'Daily Business'
}

export default function ProductData() {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.Title>{mock.productName}</S.Title>
        <S.TagsWrapper>
          {mock.tags.map((tag) => (
            <S.Tag key={`tag-${tag}`} data-testid={tag}>
              {tag}
            </S.Tag>
          ))}
        </S.TagsWrapper>
      </S.InfoWrapper>

      <S.Category>{mock.category}</S.Category>
    </S.Wrapper>
  )
}
