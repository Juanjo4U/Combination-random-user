import reducer, { initialState } from './reducer';
import { setLoader,setUserListResponse } from "./actions";

describe('TESTING_REDUCER', () => {
    test('STATE INITIALIZE PROPERLY', () => {
        const initState = reducer(undefined, {});
        expect(initState).toEqual(initialState);
    });

    test('UPDATES LOADING STATE PROPERLY', () => {
        let state = reducer(undefined, setLoader(true));
        expect(state.isLoading).toEqual(true);
        state = reducer(state, setLoader(false));
        expect(state.isLoading).toEqual(false);
    });

    test('UPDATES DATA STATE PROPERLY', () => {
        const data = [];
        let state = reducer(undefined, {});
        expect(state.data).toEqual(initialState.data);
        state = reducer(state, setUserListResponse(data));
        expect(state.data).toEqual(data);
    });
});
