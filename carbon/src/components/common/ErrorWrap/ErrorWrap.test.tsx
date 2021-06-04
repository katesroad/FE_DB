import { render, screen } from '@testing-library/react'
import { ErrorWrap } from './index'

test('<Error />', () => {
  const message = 'Caution!'
  render(
    <ErrorWrap className="caution-msg">
      <h2>{message}</h2>
    </ErrorWrap>
  )

  const ele = screen.getByRole('alert')

  // render children content
  expect(ele.textContent).toMatchInlineSnapshot(`"Caution!"`)

  // have default class ui-error
  expect(ele.classList.contains('ui-error')).toBeTruthy()

  // allow add custom clas name for component
  expect(ele.classList.contains('caution-msg')).toBeTruthy()
})
