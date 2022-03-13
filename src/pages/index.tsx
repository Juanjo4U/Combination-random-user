import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "../components/error/errorBoundary";
import { Map } from "../components/map";
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
          {results.map((user) => (
            <ErrorBoundary key={user.login.uuid}>
              <>
                <br />
                <p>FIRST_NAME: {user.name.first}</p>
                <p>LAST_NAME: {user.name.last}</p>
                <img src={user.picture.thumbnail} alt={user.name.title} />
                <br />
                <Map withMarker
                  coords={{
                    lat: Number(user.location.coordinates.latitude),
                    lng: Number(user.location.coordinates.longitude),
                  }}
                />
              </>
            </ErrorBoundary>
          ))}
        </>
      )}
    </div>
  );
}
