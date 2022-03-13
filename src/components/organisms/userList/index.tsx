import { UserList } from "../../../api/requests/user/contractType";
import { ErrorBoundary } from "../../error/errorBoundary";
import { Card } from "../../molecules";
import './userList.css';

interface UserListProps {
    title?: string,
    userList: UserList
}

export default function UserListComponent({ title, userList }: UserListProps) {
    return (
        <ErrorBoundary>
            <>
                {title && <h2>{title}</h2>}
                <div className="user-list-container" >
                    {userList.map((user) =>
                        <Card user={user} key={user.login.uuid} />
                    )}
                </div>
            </>
        </ErrorBoundary>
    )
}