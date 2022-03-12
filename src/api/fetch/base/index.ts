import { constants } from "../../../utils/constants";

const defaultThenAction = <T>(res: any): T => res?.json() as T;

export interface FetchBase {
    url?: string;
    params?: object;
    options?: object;
    then?<T>(...args: any): T;
}

const base = async <T>({ url = "", options = {}, then: thenAction = defaultThenAction }: FetchBase = {}): Promise<T> => {
    const res = await fetch(constants.API_URLs.BASE + url, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });
    if (!res.ok)
        return Promise.reject({ status: res.status, error: res.statusText });
    return thenAction<T>(res);
};

export default base;