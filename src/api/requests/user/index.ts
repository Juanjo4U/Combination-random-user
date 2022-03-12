import { request } from "../../fetch";
import { UserListResponse } from "./contractType";

export function list() {
    return request.get<UserListResponse>()
}