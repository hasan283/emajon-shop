import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequarAuth from './components/RequarAuth/RequarAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SingUp from './components/SingUp/SingUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequarAuth>
            <Inventory></Inventory>
          </RequarAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequarAuth>
            <Shipment></Shipment>
          </RequarAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singUp' element={<SingUp></SingUp>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>

    </div>
  );
}

export default App;
