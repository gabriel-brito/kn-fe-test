import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'
import ProductData from 'components/ProductData'

const mock = {
  category: 'Daily Business',
  handler: jest.fn(),
  productName: 'Foxit software PhantomPDF Standard',
  tags: ['PDF', 'Change', 'Create', 'Maintenance', 'Business', 'FoxIT']
}

describe('ProductData', () => {
  it('should render correctly', () => {
    render(<ProductData {...mock} />)

    expect(
      screen.getByRole('heading', {
        name: /Foxit software PhantomPDF Standard/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Daily Business/i })
    ).toBeInTheDocument()

    mock.tags.forEach((tag) => {
      expect(screen.getByTestId(tag)).toBeInTheDocument()
    })
  })

  it('should call function when clicked', () => {
    const fn = jest.fn()

    render(<ProductData {...mock} handler={fn} />)

    UserEvent.click(screen.getByTestId('product-data'))

    expect(fn).toHaveBeenCalledTimes(1)
  })
})
