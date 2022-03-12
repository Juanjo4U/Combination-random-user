import { AnyAction } from "redux";
import { UserListResponse } from "../../../api/requests/user/contractType";
import { types } from "./types";

export function setUserListResponse(userList: UserListResponse): AnyAction {
    return ({
        type: types.SET_USER_LIST_RESPONSE,
        payload: userList
    });
}

export function setLoader(isLoading: boolean = false): AnyAction {
    return ({
        type: types.SET_USER_LOADER_STATUS,
        payload: isLoading
    });

}
export function setUserRequestError(error: any): AnyAction {
    return ({
        type: types.SET_USER_REQUEST_ERROR,
        payload: error
    });
}