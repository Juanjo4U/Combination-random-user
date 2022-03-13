import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorComponent } from "../../components/error/errorComponent";
import { UserList } from "../../components/organisms";
import { requestUserList } from "../../redux/states/user/sagas/actions";
import { selectUserData, selectUserRequestError } from "../../redux/states/user/selectors";
import './userListPage.css';

export default function UserListPage() {
    const isError = useSelector(selectUserRequestError);
    const { results: userList = [] } = useSelector(selectUserData);

    const dispatch = useDispatch();

    const requestList = useCallback(() => {
        dispatch(requestUserList());
    }, [dispatch]);

    useEffect(requestList, [dispatch, requestList]);
    return (
        <div className="user-list-page-wrapper" >
            <h1>COMBINATION RANDOM USER APP</h1>
            {isError ? (
                <ErrorComponent message="there was an unexpected Error" buttonText="try again" onButtonClick={requestList} />
            ) : (
                <UserList title="User List" userList={userList} />
            )}
        </div>
    );
}
