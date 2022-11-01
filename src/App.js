import "./index.css";
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Provider from "./context/CartContext";
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ItemListContainer />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;


/* 
NavBar:
Muestra el brandname de la tienda.
Muestra las categorías de los productos.
Muestra el CartWidget.

CartWidget:
Muestra el ícono de carrito y una burbuja de
notificación con un valor hardcodeado.

ItemListContainer:
Se renderiza debajo de NavBar.js y como hijo de App.js
Renderiza un texto que se le es asignado como props

----------------------------------------------

Navegabilidad:
Logra la navegabilidad completa y usa el hook
"useEffect" para mostrar los datos solicitados al
momento de cambiar de categoría y/o itemId

NavBar: Se implementa la navegabilidad mediante los
links hacia las categorías (Implementa los Links
y logra navegaciones sin reload)
Usa una promise para devolver los productos

ItemListContainer: Filtra por categorías implementando
correctamente el hook useParams (para el Id
de Categoría), y aprovecha un useEffect para
detectar sus cambios de ruta

ItemDetail: Accede a la información del producto
solicitado mediante el parámetro "itemId"
usando una Promise.
Muestra el componenente ItemCount como
hijo de ItemDetail





*/