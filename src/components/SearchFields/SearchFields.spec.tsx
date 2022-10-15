import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import SearchFields from 'components/SearchFields'
import { categories } from 'mocks/categories'

describe('SearchFields', () => {
  it('should render properly', () => {
    const props = {
      handleCategory: jest.fn(),
      handleInput: jest.fn(),
      selectedCategory: ''
    }

    render(<SearchFields {...props} />)

    expect(
      screen.getByRole('heading', { name: /I'm looking for.../i })
    ).toBeInTheDocument()

    categories.forEach((category) => {
      expect(screen.getByLabelText(category)).toBeInTheDocument()
    })

    expect(screen.getByTestId('search-input')).toBeInTheDocument()
  })

  it('should check the selected category on click', () => {
    let selectedCategory = ''
    const handleCategory = (category: string) => {
      selectedCategory = category
    }

    const props = {
      handleCategory,
      handleInput: jest.fn(),
      selectedCategory
    }

    const { rerender } = render(<SearchFields {...props} />)

    const checkbox = screen.getByLabelText(categories[0])

    expect(checkbox).not.toBeChecked()

    userEvent.click(checkbox)

    rerender(<SearchFields {...props} selectedCategory={selectedCategory} />)

    expect(checkbox).toBeChecked()
  })

  it('should call handleInput on searching input typing', () => {
    const props = {
      handleCategory: jest.fn(),
      handleInput: jest.fn(),
      selectedCategory: ''
    }

    render(<SearchFields {...props} />)

    const searchInput = screen.getByTestId('search-input')

    expect(searchInput).not.toHaveValue()

    userEvent.type(searchInput, 'Hello World')

    expect(searchInput).toHaveValue('Hello World')

    expect(props.handleInput).toHaveBeenCalledTimes(11)
  })
})
