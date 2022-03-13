import { ImgHTMLAttributes } from "react";
import { ErrorBoundary } from "../../error/errorBoundary";

export default function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <ErrorBoundary>
            <img {...props} alt={props.alt} />
        </ErrorBoundary>
    )
}