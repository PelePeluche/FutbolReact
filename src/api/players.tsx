import { BASE_API } from '../utils/constants'

/**
 * Retrieves the players from the API.
 *
 * @returns {Promise<Player[]>} A promise that resolves to an array of Player objects.
 * @throws {Error} If there is an error retrieving the players.
 */
export async function getPlayersApi (): Promise<Player[]> {
  try {
    const url = `${BASE_API}/api/players/`

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Error retrieving players')
    }
    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}
