import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './theme.context'
import { Container, Header } from 'components/common'
import { ErrorBoundaryProvider, Spinner } from '../components/common'

/**
 * Setup default staleTime and cacheTime for queries data caching
 * Doc: https://react-query.tanstack.com/reference/QueryClient#queryclient
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    },
  },
})

const AppProviders: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <ErrorBoundaryProvider>
            <React.Suspense
              fallback={<Spinner fullscreen={true} size="large" />}
            >
              <Header />
              <main>
                <Container>{children}</Container>
              </main>
            </React.Suspense>
          </ErrorBoundaryProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export { AppProviders, queryClient }
