import * as gameSystemStatuses from './statuses';

export const selectGameSystem = store => store.gameSystem.gameSystem;

export const selectGameSystemIsReady = (store) => (
  (store.gameSystem.status === gameSystemStatuses.GAME_SYSTEM_REQUEST)
    || (store.gameSystem.status === gameSystemStatuses.GAME_SYSTEM_SUCCESS)
    || (store.gameSystem.status === gameSystemStatuses.GAME_SYSTEM_ERROR)
);
