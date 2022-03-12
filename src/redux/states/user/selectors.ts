import { initialStoreState } from "../../";
import { UserListResponse } from "../../../api/requests/user/contractType";

export function selectUser(state = initialStoreState) {
    return state.user;
}

export function selectUserRequestError(state = initialStoreState) {
    const user = selectUser(state);
    return user.error;
}

export function selectUserData(state = initialStoreState): UserListResponse {
    const user = selectUser(state);
    return user.data;
};