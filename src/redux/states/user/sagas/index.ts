import { call, put, fork, takeLatest, StrictEffect } from "redux-saga/effects";
import { ApiRequest } from "../../../../api/requests";
import { setLoader, setUserListResponse, setUserRequestError } from "../actions";
import { sagaTypes } from "./types";
import { UserListResponse } from "../../../../api/requests/user/contractType";

export function* requestUserList(): Generator<StrictEffect, any, UserListResponse> {
    yield put(setLoader(true));
    yield put(setUserRequestError(null));
    try {
        const res = yield call(ApiRequest.USER.list);
        yield put(setUserListResponse(res));
    } catch (err) {
        yield put(setUserRequestError(err));
    } finally {
        yield put(setLoader(false));
    }
}

function* watchLoginRequest() {
    yield takeLatest(sagaTypes.REQUEST_USER_LIST, requestUserList);
}

export const userSagas = [fork(watchLoginRequest)];