import { useGetPlayers } from './Hooks/usePlayer'
import { PlayerStatisticsTable } from './Tables'

/**
 * Renders the players statistics component.
 * 
 * @returns {JSX.Element} The rendered players statistics component.
 */
export function PlayersStatistics (): JSX.Element {
  // Retrieve the players data using the useGetPlayers hook
  const players = useGetPlayers()

  return (
    <div>
      <h1>Statistics</h1>
      <PlayerStatisticsTable players={players} />
    </div>
  )
}
