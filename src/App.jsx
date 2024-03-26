import { Provider } from "react-redux";
import "./App.css";
import Counter from "./features/counter/counter";
import {store} from './app/store'
function App() {
  return (
      <provider store={store}>
        <div className="border border-2 border-danger m-2 p-2">
      <h1>App</h1>
      <Counter></Counter>
    </div>
      </provider>
  );
}

export default App;
