import { request } from "../../fetch";
import { UserResponse } from "./contractType";

export const list = () => {
    return request.get<UserResponse>()
}