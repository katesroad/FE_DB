import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  useGetNationalCurrentIndensity,
  useGetRegionsCarbon,
} from './carbon.hooks'

/**
 * 1. How to test hooks customized by react-query
 *  https://react-query.tanstack.com/guides/testing
 * 2. Configure react-query client
 * https://react-query.tanstack.com/reference/QueryClient#queryclient
 * 3. clear mock
 */

const client = require('./client')
jest.mock('./client', () => jest.fn())

const queryClient = new QueryClient({
  // set retry times as zero to save testing time
  defaultOptions: { queries: { retry: 0 } },
})
const App: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useuseGetRegionsCarbon', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    queryClient.clear() // clear data cached at query client
  })
  it('get data successfully', async () => {
    // eslint disable next line
    const data: any[] = []

    client.mockResolvedValueOnce(data)
    const now = new Date().toISOString()
    const nextDay = new Date().toISOString()
    const { result } = renderHook(
      () => useGetRegionsCarbon({ from: now, to: nextDay }),
      { wrapper: App }
    )

    expect(result.current.status).toBe('loading')

    await waitFor(() => result.current.isFetched)

    expect(result.current.status).toBe('success')
    expect(result.current.data).toEqual(data)
  })

  it('get data failed', async () => {
    const error = { code: '400 bad request', message: 'Bad request' }
    client.mockRejectedValueOnce(error)
    const from = new Date().toISOString()
    const to = new Date().toISOString()
    const { result } = renderHook(() => useGetRegionsCarbon({ from, to }), {
      wrapper: App,
    })

    expect(result.current.status).toBe('loading')

    await waitFor(() => result.current.isFetched)

    expect(result.current.status).toBe('error')
    expect(result.current.error).toEqual(error)
  })
})

describe('useGetNationalCurrentIndensity', () => {
  // @todo check
  beforeEach(() => {
    jest.clearAllMocks()
    queryClient.clear()
  })

  it('get data successfully', async () => {
    // eslint disable next line
    const data: any[] = [
      {
        from: '2021-06-02T03:00Z',
        to: '2021-06-02T03:30Z',
        intensity: {
          forecast: 125,
          actual: null,
          index: 'low',
        },
      },
    ]
    client.mockResolvedValueOnce(data)

    const { result } = renderHook(() => useGetNationalCurrentIndensity(), {
      wrapper: App,
    })

    expect(result.current.status).toBe('loading')

    await waitFor(() => result.current.isFetched)

    expect(result.current.status).toBe('success')
    expect(result.current.data).toEqual(data)
  })

  it('get data failed', async () => {
    const error = { code: '400 bad request', message: 'Bad request' }
    client.mockRejectedValueOnce(error)
    const { result } = renderHook(() => useGetNationalCurrentIndensity(), {
      wrapper: App,
    })

    expect(result.current.status).toBe('loading')

    await waitFor(() => result.current.isFetched)

    expect(result.current.status).toBe('error')
    expect(result.current.error).toEqual(error)
    expect(result.current.data).toBe(undefined)
  })
})
