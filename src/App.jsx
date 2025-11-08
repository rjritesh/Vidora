import Navbar from './components/Navbar';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-zinc-900 min-h-screen text-white">
        <Navbar />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
