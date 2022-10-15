import * as S from './styles'

type ProductDataTypes = {
  category: string
  handler: () => void
  productName: string
  tags: string[] | []
}

export default function ProductData({
  category,
  handler,
  productName,
  tags
}: ProductDataTypes) {
  return (
    <S.Wrapper data-testid="product-data" onClick={handler}>
      <S.InfoWrapper>
        <S.Title>{productName}</S.Title>
        <S.TagsWrapper>
          {tags.length > 0 &&
            tags.map((tag) => (
              <S.Tag key={`tag-${tag}`} data-testid={tag}>
                {tag}
              </S.Tag>
            ))}
        </S.TagsWrapper>
      </S.InfoWrapper>

      <S.Category>{category}</S.Category>
    </S.Wrapper>
  )
}
