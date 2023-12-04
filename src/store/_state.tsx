
import { SessionInitiateState, SessionStoreState } from './Session/StateSession';

export interface RootState {
    sessionStore: SessionStoreState;
}

export const rootInitialState = (): RootState => ({
    sessionStore: SessionInitiateState(),
});