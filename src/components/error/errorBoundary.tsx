import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  errorComponent?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // here we can handle the error
    //console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent ?? <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
