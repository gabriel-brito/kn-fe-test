import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Tabs from 'components/Tabs'

describe('Tabs', () => {
  it('should render properly', () => {
    render(<Tabs actualStep={1} handleStep={jest.fn()} />)

    expect(screen.getByTestId('tabs-wrapper')).toBeInTheDocument()
  })

  it('should render with first tab with aqua color (#12B8FF) and others do not', () => {
    render(<Tabs actualStep={1} handleStep={jest.fn()} />)

    expect(
      screen.getByRole('button', { name: /product-tab-button/i })
    ).toHaveStyleRule('border-bottom', '2px solid var(--aqua)')

    expect(
      screen.getByRole('button', { name: /addresses-tab-button/i })
    ).not.toHaveStyleRule('border-bottom', '2px solid var(--aqua)')

    expect(
      screen.getByRole('button', { name: /overview-tab-button/i })
    ).not.toHaveStyleRule('border-bottom', '2px solid var(--aqua)')
  })

  it('should change the button with aqua color on click', () => {
    let actualStep = 1
    const changeActualStep = (step: number) => (actualStep = step)

    const { rerender } = render(
      <Tabs actualStep={actualStep} handleStep={changeActualStep} />
    )

    const firstTabButton = screen.getByRole('button', {
      name: /product-tab-button/i
    })
    const secondTabButton = screen.getByRole('button', {
      name: /addresses-tab-button/i
    })

    expect(firstTabButton).toHaveStyleRule(
      'border-bottom',
      '2px solid var(--aqua)'
    )

    expect(secondTabButton).not.toHaveStyleRule(
      'border-bottom',
      '2px solid var(--aqua)'
    )

    userEvent.click(secondTabButton)

    rerender(<Tabs actualStep={actualStep} handleStep={changeActualStep} />)

    expect(firstTabButton).not.toHaveStyleRule(
      'border-bottom',
      '2px solid var(--aqua)'
    )

    expect(secondTabButton).toHaveStyleRule(
      'border-bottom',
      '2px solid var(--aqua)'
    )
  })
})
