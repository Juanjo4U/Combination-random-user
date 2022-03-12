import { AnyAction } from "redux";
import { sagaTypes } from "./types";

export function requestUserList(): AnyAction {
    return ({
        type: sagaTypes.REQUEST_USER_LIST
    });
}