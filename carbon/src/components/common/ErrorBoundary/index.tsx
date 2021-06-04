import * as React from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { useLocation } from 'react-router'
import { ErrorWrap } from '../ErrorWrap'
import { GoHome } from '../GoHome'
import './styles.scss'

const ErrorFallback = ({ error }: FallbackProps) => {
  const { pathname } = useLocation()
  return (
    <div className="error-boundary">
      <ErrorWrap>
        <h2>Something went wrong:</h2>
        <pre>{error?.message}</pre>
        <p className="error-boundary__solution">
          {pathname === '/' ? null : <GoHome />}
          <button
            className="ui-button"
            onClick={() => window.location.reload()}
          >
            refresh
          </button>
        </p>
      </ErrorWrap>
    </div>
  )
}

export const ErrorBoundaryProvider: React.FC<{ children: React.ReactElement }> =
  ({ children }) => {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    )
  }
