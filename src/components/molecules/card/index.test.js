import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { Card } from "..";

afterEach(cleanup);

const user = {
    name: {
        title: 'Juanjo Fernández',
        first: 'Juanjo',
        last: 'Fernández'
    },
    picture: {
        large: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    location: {
        country: 'Spain'
    }
}

test("Card renders without crashing", () => {
    render(<Card user={user} />);
});

test('Card renders userData properly', () => {
    render(<Card user={user} />);
    const imgSrc = screen.getByAltText(new RegExp(user.name.title)).getAttribute('src');
    expect(imgSrc).toEqual(user.picture.large);
    screen.getByText(new RegExp(user.name.first));
    screen.getByText(new RegExp(user.name.last));
    screen.getByText(new RegExp(user.location.country));
});
