import { render } from '@testing-library/react'
import { DocTitle } from '.'

test('render <Doctitle />', () => {
  const title = 'Test'
  const title2 = 'Test2'
  const { rerender } = render(<DocTitle title={title} />)
  /**
   * How to get document.title when using jest
   * Solution:https://stackoverflow.com/questions/48097366/page-title-not-available-with-jest-enzyme-for-testing-react-app-how-to-get-the
   */
  expect(global.window.document.title).toBe(title)

  rerender(<DocTitle title={title2} />)
  expect(global.window.document.title).toBe(title2)
})
