import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import { PlayerStatisticsTable } from './Tables'
import { createMockedPlayers } from './utils/utilsTest'

describe('PlayerStatisticsTable', () => {
  let component: RenderResult

  const mockedPlayers: Player[] = createMockedPlayers()

  beforeEach(() => {
    component = render(<PlayerStatisticsTable players={mockedPlayers} />)
  })

  test('renders without crashing', () => {
    expect(component).toBeDefined()
  })

  test('renders the correct number of players', () => {
    const rows = component.container.querySelectorAll('tr')
    expect(rows.length).toBe(mockedPlayers.length + 1)
  })

  test('renders the correct number of columns', () => {
    const columns = component.container.querySelectorAll('th')
    expect(columns.length).toBe(5)
  })
})
