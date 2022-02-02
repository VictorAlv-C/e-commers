import './App.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Login, ProductDetail, ProductList, Cart} from './pages/indexPages'
import {RoutesProtected} from './components';
import { useSelector } from 'react-redux';


function App() {

  const isLoadign = useSelector(state => state.isLoadign)

  return (
    <div className="App">
     <HashRouter>

      {isLoadign && <h1> Loadign </h1>}

       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/shop" />} />

          <Route element={<RoutesProtected/>}>
            <Route path="/shop" element={<ProductList />}/>
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
           
       </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
