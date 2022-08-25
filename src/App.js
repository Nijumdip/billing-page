import './App.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
