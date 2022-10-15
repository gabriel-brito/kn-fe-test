import * as S from './styles'
import { categories } from 'mocks/categories'

type SearchFieldsTypes = {
  handleCategory: (category: string) => void
  handleInput: (searchTerm: string) => void
  selectedCategory: string
}

export default function SearchFields({
  handleCategory,
  handleInput,
  selectedCategory
}: SearchFieldsTypes) {
  return (
    <S.Wrapper data-testid="search-fields">
      <S.Title>I'm looking for...</S.Title>

      <S.SearchWrapper>
        <S.OptionWrapper>
          {categories.map((category, index) => (
            <S.OptionLabel key={`category-${index}`}>
              <S.CheckBox
                checked={category === selectedCategory}
                onChange={() => handleCategory(category)}
                type="checkbox"
                value={category}
              />

              {category}
            </S.OptionLabel>
          ))}
        </S.OptionWrapper>

        <S.SearchInput
          data-testid="search-input"
          onChange={(event) => handleInput(event.target.value)}
          placeholder="Type here..."
          type="text"
        />
      </S.SearchWrapper>
    </S.Wrapper>
  )
}
