import './App.css';
import Cart from './component/cart';
import Header from './component/header';
import Main from './component/main';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
