import { Provider } from "react-redux";
import { store } from "./redux";
import { UserListPage } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <UserListPage />
    </Provider>
  );
}

export default App;
