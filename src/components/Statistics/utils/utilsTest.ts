import { faker } from '@faker-js/faker'

/**
* Generates a list of mocked players with random statistics.
*
* @returns {Player[]} The list of mocked players.
*/
export function createMockedPlayers(): Player[] {
  // Generate a random number of players between 0 and 50
  const numberOfPlayers = faker.number.int({ min: 0, max: 50 })

  // Create an empty array to store the mocked players
  const mockedPlayers: Player[] = []

  // Generate the mocked players
  for (let i = 0;i < numberOfPlayers;i++) {
    // Generate random first and last names for the player
    const playerFirstName = faker.person.firstName()
    const playerLastName = faker.person.lastName()

    // Generate random numbers for the played, wins, and draws statistics
    const played = faker.number.int({ min: 0, max: 100 })
    const wins = faker.number.int({ min: 0, max: 100 })
    const draws = faker.number.int({ min: 0, max: 100 - wins })
    const losses = played - wins - draws

    // Create a mocked player object with the generated statistics
    const mockedPlayer: Player = {
      id: i + 1,
      username: faker.internet.userName({
        firstName: playerFirstName,
        lastName: playerLastName
      }),
      email: faker.internet.email({
        firstName: playerFirstName,
        lastName: playerLastName
      }),
      first_name: playerFirstName,
      last_name: playerLastName,
      statistics: {
        played: played,
        wins: wins,
        draws: draws,
        losses: losses
      },
      avatar: null
    }

    // Add the mocked player to the array
    mockedPlayers.push(mockedPlayer)
  }

  // Return the list of mocked players
  return mockedPlayers
}