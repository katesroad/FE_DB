import { Spinner, Error } from "components/lib";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function SuspenseErrorBoundary({ children, ...props }) {
  return (
    <ErrorBoundary {...props}>
      <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>
    </ErrorBoundary>
  );
}

// for failed to load page
export function RouteFallbackComponent({ path }) {
  return <p>Failed to load route component for {path}</p>;
}

// For failed to load component
export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Error role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </Error>
  );
}
