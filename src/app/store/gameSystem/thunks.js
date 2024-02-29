import * as gameSystemStatuses from './statuses';

// API
import { fetchGameSystem } from '../../../api/gameSystem';

// Slice
import { setGameSystem, setStatus } from './slice';

export const loadGameSystem = (itemId) => async (dispatch) => {
  if (!itemId) {
    dispatch(setGameSystem(null));
    return;
  }

  dispatch(setStatus(gameSystemStatuses.GAME_SYSTEM_REQUEST));

  try {
    const gameSystemResponse = await fetchGameSystem({ itemId });
    const gameSystem = gameSystemResponse?.data;
    dispatch(setStatus(gameSystemStatuses.GAME_SYSTEM_SUCCESS));
    dispatch(setGameSystem(gameSystem));      
  } catch (error) {
    dispatch(setStatus(gameSystemStatuses.GAME_SYSTEM_ERROR));
    console.error(error);
  }
};
