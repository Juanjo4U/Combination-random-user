import { MouseEventHandler } from "react";
import './errorComponent.css';

interface ErrorProps {
    message: string,
    buttonText?: string,
    onButtonClick?: MouseEventHandler
}

export function ErrorComponent({ message, buttonText, onButtonClick }: ErrorProps) {
    return (
        <div className="error-container" >
            <p className="error-message" >{message}</p>
            {buttonText && <button className="error-button" onClick={onButtonClick} >{buttonText}</button>}
        </div>
    )
}