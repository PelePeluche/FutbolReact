import { useState, useEffect } from 'react'
import { getPlayersApi } from '../../../api/players'

/**
 * Fetches and returns the list of players.
 *
 * @returns {Player[]} The list of players.
 */
export function useGetPlayers (): Player[] {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    /**
     * Fetches the players from the API and updates the state with the fetched players.
     */
    async function fetchPlayers () {
      const fetchedPlayers = await getPlayersApi()
      setPlayers(fetchedPlayers)
    }

    // Fetch players when the component mounts
    fetchPlayers()
  }, [])

  return players
}
