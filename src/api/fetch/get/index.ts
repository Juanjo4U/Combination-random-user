import base, { FetchBase } from "../base";

export const get = <T>({ url, params = {}, options = {}, then }: FetchBase = {}): Promise<T> => {
    const urlParams = Object.entries(params)
        .reduce((acc, [key, value]) => `${acc}${key}=${value}&`, "?")
        .slice(0, -1);
    return base<T>({ url: url + urlParams, options, then });
};