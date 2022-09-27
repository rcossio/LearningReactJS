import React, { Fragment } from 'react';
import Header from './components/header';
import ItemListContainer from "./components/itemlistcontainer"

function App() {
  return (
    <Fragment>
      < Header /> {/* Ver NavBar adentro del header */}
      < ItemListContainer text='This is the ItemList container with text passed as a prop, try passing a different text...' />
    </Fragment>
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