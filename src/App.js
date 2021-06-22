import { Provider } from "react-redux";
import { Search } from "./pages/Search";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Search />
      </Provider>
    </div>
  );
}

export default App;
