import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

interface PlayerStatisticsProps {
  players: Player[]
}
/**
 * Render a table displaying player statistics.
 *
 * @param players - An array of player objects
 *
 * @returns The JSX element representing the player statistics table
 */
export function PlayerStatisticsTable ({
  players
}: PlayerStatisticsProps): JSX.Element {
  // Define the keys for the player statistics columns
  const playerKeys = [
    'username',
    'statistics.played',
    'statistics.wins',
    'statistics.draws',
    'statistics.losses'
  ]

  return (
    <Table>
      <TableHead>
        <TableRow>
          {/* Render table headers */}
          {playerKeys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Render table rows */}
        {players.map(player => (
          <TableRow key={player.id}>
            {/* Render table cells */}
            {playerKeys.map(key => (
              <TableCell key={key}>{getNestedValue(player, key)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

/**
 * Retrieves a nested value from an object based on a given path.
 * @param obj - The object to retrieve the nested value from.
 * @param path - The path to the nested value, separated by dots.
 *
 * @returns The nested value if found, otherwise undefined.
 */
function getNestedValue (obj: any, path: string): any {
  // Split the path into individual keys
  const keys = path.split('.')

  // Initialize the value as the object itself
  let value = obj

  // Iterate through each key in the path
  for (const key of keys) {
    // Access the current key in the value, if it exists
    value = value?.[key]
  }

  // Return the final nested value
  return value
}
