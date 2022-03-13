import { Provider } from "react-redux";
import { store } from "./redux";
import Test from "./pages";

function App() {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
}

export default App;
