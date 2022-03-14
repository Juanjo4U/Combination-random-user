import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ErrorComponent } from ".";

afterEach(cleanup);

describe('TEST ERROR COMPONENT', () => {
    const message = 'Error message';
    const buttonText = 'btn text';
    test("renders without crashing", () => {
        render(<ErrorComponent message={message} />);
    });

    test('applyes correct message', () => {
        const component = render(<ErrorComponent message={message} />);
        component.getByText(new RegExp(message));
    });

    test('applyes button text and FIRES the event passed by props', () => {
        const event = jest.fn();
        const component = render(
            <ErrorComponent
                message={message}
                buttonText={buttonText}
                onButtonClick={event}
            />
        );
        const button = component.getByText(new RegExp(buttonText));
        fireEvent.click(button);
        expect(event).toHaveBeenCalledTimes(1);
    });
});