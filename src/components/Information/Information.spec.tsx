import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Information from 'components/Information'

describe('Information', () => {
  it('should match snapshot', () => {
    render(<Information />)

    expect(screen.getByTestId('information')).toMatchInlineSnapshot(`
      .c0 {
        margin-bottom: 36px;
      }

      .c1 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 6px;
      }

      .c2 {
        color: var(--darkGrey);
        font-weight: 400;
        font-size: 16px;
      }

      <div
        class="c0"
        data-testid="information"
      >
        <h1
          class="c1"
        >
          Create Demand
        </h1>
        <h2
          class="c2"
        >
          Search the product you need here. Use tags to find alternative.
        </h2>
      </div>
    `)
  })
})
