import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Switcher from '.'

test('Render <Swithcer /> with defaultIsOn property', () => {
  const onChange = jest.fn()
  let defaultIsOn = false
  render(<Switcher onChange={onChange} defaultIsOn={defaultIsOn} />)

  userEvent.click(screen.getByRole('button'))
  expect(onChange).toBeCalledTimes(1)
  expect(onChange).toBeCalledWith(!defaultIsOn)
})

test('Render <Switcher /> with css className', () => {
  const className = 'type-switcher'
  render(<Switcher className={className} />)

  // Switcher has a default lable switcher
  expect(
    screen.getByLabelText('switcher').classList.contains(className)
  ).toBeTruthy()
})
