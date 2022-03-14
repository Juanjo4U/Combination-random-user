import { selectUser, selectUserData, selectUserRequestLoader, selectUserRequestError } from "./selectors";

describe('testing redux userState selectors', () => {
    const testState = {
        user: {
            data: [],
            isLoading: false,
            error: 'Any Error'
        }
    }

    test('SELECT_USER_RETURNS: ' + JSON.stringify(testState.user), () => {
        const user = selectUser(testState);
        expect(user).toEqual(testState.user);
    });

    test('SELECT_USER_DATA_RETURNS: ' + JSON.stringify(testState.user.data), () => {
        const userData = selectUserData(testState);
        expect(userData).toEqual(testState.user.data);
    });

    test('SELECT_USER_REQUEST_LOADER_RETURNS: ' + JSON.stringify(testState.user.isLoading), () => {
        const isLoading = selectUserRequestLoader(testState);
        expect(isLoading).toEqual(testState.user.isLoading);
    });

    test('SELECT_USER_REQUEST_ERROR_RETURNS: ' + JSON.stringify(testState.user.error), () => {
        const error = selectUserRequestError(testState);
        expect(error).toEqual(testState.user.error);
    });
})