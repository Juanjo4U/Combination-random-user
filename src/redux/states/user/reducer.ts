import { AnyAction } from "redux";
import { UserListResponse } from "../../../api/requests/user/contractType";
import { types } from "./types";

export const initialState = {
    data: {} as UserListResponse,
    isLoading: false as boolean,
    error: null as any
}

export default function reducer(prevState = initialState, { type, payload }: AnyAction): typeof initialState {
    const state = { ...prevState };
    switch (type) {
        case types.SET_USER_LIST_RESPONSE: {
            state.data = payload;
            break;
        }

        case types.SET_USER_LOADER_STATUS: {
            state.isLoading = payload;
            break;
        }

        case types.SET_USER_REQUEST_ERROR: {
            state.error = payload;
            break;
        }

        default: break;
    }
    return state;
}