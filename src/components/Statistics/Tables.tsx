import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

interface PlayerStatisticsProps {
  players: Player[]
}
export function PlayerStatisticsTable ({
  players
}: PlayerStatisticsProps): JSX.Element {
  const playerKeys = [
    'username',
    'statistics.played',
    'statistics.wins',
    'statistics.losses'
  ]

  return (
    <Table>
      <TableHead>
        <TableRow>
          {playerKeys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {players.map(player => (
          <TableRow key={player.id}>
            {playerKeys.map(key => (
              <TableCell key={key}>{getNestedValue(player, key)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function getNestedValue (obj: any, path: string): any {
  const keys = path.split('.')
  let value = obj
  for (const key of keys) {
    value = value?.[key]
  }
  return value
}
