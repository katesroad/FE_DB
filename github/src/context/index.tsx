import * as React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './theme.context'
import GlobalStyles from 'components/GlobalStyles'

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
})

const AppProviders: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <ThemeProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default AppProviders
