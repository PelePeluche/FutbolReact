import { useState, useEffect } from 'react'
import { getPlayersApi } from '../../api/players'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

/**
 * Fetches and renders the statistics of players.
 *
 * @returns A React component that renders the statistics.
 */
export function PlayersStatistics (): JSX.Element {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    async function fetchPlayers () {
      const players = await getPlayersApi()
      setPlayers(players)
    }

    fetchPlayers()
  }, [])

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Wins</TableCell>
            <TableCell>Losses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(player => (
            <TableRow key={player.id}>
              <TableCell>{player.username}</TableCell>
              <TableCell>{player.estadisticas?.wins}</TableCell>
              <TableCell>{player.estadisticas?.losses}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
