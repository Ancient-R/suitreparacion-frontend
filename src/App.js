import AppRouter from "./router/AppRouter";

import { Provider } from 'react-redux';
import store from "./store/store";

function App() {
  return (
    <Provider store={ store }>
      <div className="container">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
