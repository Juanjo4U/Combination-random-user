import { call, put } from "redux-saga/effects";
import { requestUserList } from ".";
import { ApiRequest } from "../../../../api/requests";
import { setLoader, setUserRequestError, setUserListResponse } from "../actions";

describe('TESTING_REQUEST_USER_LIST_SAGA_SUCCESS', () => {
    const iterator = requestUserList();
    test('DISPATCH_SET_LOADER_TO_TRUE', () => {
        expect(iterator.next().value).toEqual(put(setLoader(true)));
    });

    test('DISPATCH_SET_ERROR_TO_NULL', () => {
        expect(iterator.next().value).toEqual(put(setUserRequestError(null)));
    });

    test('MAKES_USER_LIST_REQUEST', () => {
        expect(iterator.next().value).toEqual(call(ApiRequest.USER.list));
    });

    test('DISPATCH_SET_USER_LIST_RESPONSE', () => {
        const fakeResponse = { key: 'FAKE_RESPONSE' };
        expect(iterator.next(fakeResponse).value).toEqual(put(setUserListResponse(fakeResponse)));
    });

    test('DISPATCH_SET_LOADER_TO_FALSE', () => {
        expect(iterator.next().value).toEqual(put(setLoader(false)));
    });

    test('ENDS_SAGA', () => {
        expect(iterator.next().done).toEqual(true);
    });
});

describe('TESTING_REQUEST_USER_LIST_SAGA_ERROR', () => {
    const iterator = requestUserList();
    test('DISPATCH_SET_LOADER_TO_TRUE', () => {
        expect(iterator.next().value).toEqual(put(setLoader(true)));
    });

    test('DISPATCH_SET_ERROR_TO_NULL', () => {
        expect(iterator.next().value).toEqual(put(setUserRequestError(null)));
    });

    test('MAKES_USER_LIST_REQUEST', () => {
        expect(iterator.next().value).toEqual(call(ApiRequest.USER.list));
    });

    test('DISPATCH_SET_ERROR_TO_FAKE_ERROR', () => {
        const fakeError = 'ups_error';
        expect(iterator.throw(fakeError).value).toEqual(put(setUserRequestError(fakeError)));
    });

    test('DISPATCH_SET_LOADER_TO_FALSE', () => {
        expect(iterator.next().value).toEqual(put(setLoader(false)));
    });

    test('ENDS_SAGA', () => {
        expect(iterator.next().done).toEqual(true);
    });
});