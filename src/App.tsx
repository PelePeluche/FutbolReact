import { Topbar } from './components/Topbar'
import { Footer } from './components/Footbar'
import { Navigation } from './routes'

export function AppComponent (): JSX.Element {
  return (
    <div>
      <Topbar />
      <Navigation />
      <Footer />
    </div>
  )
}
