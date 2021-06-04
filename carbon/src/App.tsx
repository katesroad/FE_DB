import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

const IndexScreen = React.lazy(() => import('./screens/index.screen'))
const RegionDetailScreen = React.lazy(() => import('./screens/region.screen'))
const NotFoundScreen = React.lazy(() => import('./screens/notfound.screen'))

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={IndexScreen} />
      <Route path="/regions/:id" exact component={RegionDetailScreen} />
      <Route path="*" exact component={NotFoundScreen} />
    </Switch>
  )
}
