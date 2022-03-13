import { useCallback } from "react";
import { UserList } from "../../../api/requests/user/contractType";
import { ErrorBoundary } from "../../error/errorBoundary";
import { Card } from "../../molecules";
import './userList.css';

interface UserListProps {
    title?: string,
    userList: UserList,
    onItemClick?: (...args: any[]) => any
}

export default function UserListComponent({ title, userList, onItemClick }: UserListProps) {

    const onClick = useCallback((user, index) => {
        if (typeof onItemClick === 'function') onItemClick(user, index);
    }, [onItemClick]);

    if (!userList?.length) return null;
    return (
        <ErrorBoundary>
            <>
                {title && <h2>{title}</h2>}
                <div className="user-list-container" >
                    {userList.map((user, index) =>
                        <div key={user.login.uuid} onClick={() => onClick(user, index)} >
                            <Card user={user} />
                        </div>
                    )}
                </div>
            </>
        </ErrorBoundary>
    )
}