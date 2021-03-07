import { Spinner } from "components/lib";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function SuspenseErrorBoundary({
  ErrorFallback,
  children,
  key,
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} key={key}>
      <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>
    </ErrorBoundary>
  );
}

export function RouteFallbackComponent() {
  return <p>Failed to load route component</p>;
}
