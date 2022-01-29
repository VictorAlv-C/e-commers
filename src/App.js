import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Login, ProductDetail, ProductList, Cart} from './pages/indexPages'
import {RoutesProtected} from './components';


function App() {
  return (
    <div className="App">
     <HashRouter>
       <Routes>
          <Route path="/login" element={<Login />} />

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
