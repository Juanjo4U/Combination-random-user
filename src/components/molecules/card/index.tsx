import { User } from "../../../api/requests/user/contractType";
import { Image } from "../../atoms";
import { ErrorBoundary } from "../../error/errorBoundary";
import './card.css';

interface CardProps {
    user: User,
}

export default function Card({ user }: CardProps) {
    return (
        <ErrorBoundary>
            <div className="card-user">
                <Image className="card-user-image" src={user.picture.large} alt={user.name.title} />
                <div className="card-user-info" >
                    <p className="card-user-info-text">first-name: {user.name.first}</p>
                    <p className="card-user-info-text">last-name: {user.name.last}</p>
                    <p className="card-user-info-text">location: {user.location.country}</p>
                </div>
            </div>
        </ErrorBoundary>
    )
}