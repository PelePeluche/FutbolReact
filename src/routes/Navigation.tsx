import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

/**
 * Renders the navigation component.
 *
 * @returns The rendered navigation component.
 */
export function Navigation (): JSX.Element {
  return (
    <Routes>
      {routes.map((route: Route, index: number) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  )
}
