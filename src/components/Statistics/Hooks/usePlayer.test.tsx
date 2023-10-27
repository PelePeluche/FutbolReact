import { renderHook } from '@testing-library/react-hooks'
import { useGetPlayers } from './usePlayer'
import { getPlayersApi } from '../../../api/players'
import { createMockedPlayers } from '../utils/utilsTest'

jest.mock('../../../api/players')

describe('useGetPlayers', () => {
  test('returns the list of players', async () => {
    const mockedPlayers = createMockedPlayers()

    // Mock the API call to return the list of players
    const mockedGetPlayersApi = getPlayersApi as jest.MockedFunction<
      typeof getPlayersApi
    >
    mockedGetPlayersApi.mockResolvedValue(mockedPlayers)

    // Render the hook and wait for it to finish fetching the players
    const { result, waitForNextUpdate } = renderHook(() => useGetPlayers())

    // Verify that the hook initially returns an empty array
    expect(result.current).toEqual([])

    // Wait for the hook to finish fetching the players
    await waitForNextUpdate()

    // Verify that the hook returns the list of players returned by the API
    expect(result.current).toEqual(mockedPlayers)
  })
})
