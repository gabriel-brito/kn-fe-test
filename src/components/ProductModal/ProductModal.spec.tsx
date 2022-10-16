import { screen, render } from '@testing-library/react'
import 'jest-styled-components'
import ProductModal from 'components/ProductModal'

const mock = {
  productName: 'Foxit software PhantomPDF Standard',
  tags: ['PDF', 'Change', 'Create', 'Maintenance', 'Business', 'FoxIT'],
  category: 'Daily Business',
  manufacturerUrl: 'https://www.foxitsoftware.com/de/pdf-editor',
  description: [
    'PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.',
    'Standard - Simple interface and limited functionality.'
  ],
  option1: '1 Year Maintenance',
  option2: 'Without Maintenance'
}

describe('ProductModal', () => {
  it('should render the modal properly', () => {
    render(
      <ProductModal productData={mock} showModal={true} closeModal={() => {}} />
    )

    expect(screen.getByTestId('product-modal')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Foxit software PhantomPDF Standard/i
      })
    ).toBeInTheDocument()

    mock.tags.forEach((tag) => {
      expect(screen.getByTestId(tag)).toBeInTheDocument()
    })

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      mock.manufacturerUrl
    )

    expect(screen.getByTestId('description')).toBeInTheDocument()

    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })
})
