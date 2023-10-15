import { Home } from '../pages/Home'
import { Statistics } from '../pages/Statistics'

export const routes: Route[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/statistics',
    component: Statistics
  }
]
