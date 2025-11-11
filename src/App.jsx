import Navbar from './components/Navbar';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Sidebar from './components/Sidebar';



const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-zinc-900 min-h-screen text-white">
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Body />}></Route>
            <Route path='/watch' element={<WatchPage />}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </Provider>

  );
};

export default App;
