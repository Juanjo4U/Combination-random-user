import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { UserList } from "..";

afterEach(cleanup);

const user = {
    login: {
        uuid: 'uniqueID'
    },
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

const userList = [user];

test("UserList renders without crashing", () => {
    render(<UserList userList={userList} />);
});

test('userList adds title properly', () => {
    const title = 'User List Title';
    const component = render(<UserList title={title} userList={userList} />);
    component.getByText(title);
});

test('UserList renders Card properly', () => {
    render(<UserList userList={userList} />);
    const imgSrc = screen.getByAltText(new RegExp(user.name.title)).getAttribute('src');
    expect(imgSrc).toEqual(user.picture.large);
    screen.getByText(new RegExp(user.name.first));
    screen.getByText(new RegExp(user.name.last));
    screen.getByText(new RegExp(user.location.country));
});
