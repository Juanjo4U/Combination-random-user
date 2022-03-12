import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUserList } from "../redux/states/user/sagas/actions";
import {
  selectUserData,
  selectUserRequestError,
} from "../redux/states/user/selectors";

export default function UserList() {
  const isError = useSelector(selectUserRequestError);
  const { results = [], info = {} } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const requestList = useCallback(() => {
    dispatch(requestUserList());
  }, [dispatch]);

  useEffect(requestList, [dispatch, requestList]);
  return (
    <div>
      <h1>HELLO WORLD</h1>
      {isError ? (
        <>
          <p>THERE WAS AN ERROR!</p>
          <button onClick={requestList}>TRY AGAIN</button>
        </>
      ) : (
        <>
          <h3>INFO</h3>
          <code>{JSON.stringify(info)}</code>
          <br />
          <h3>RESULT</h3>
          <code>{JSON.stringify(results)}</code>
        </>
      )}
    </div>
  );
}
