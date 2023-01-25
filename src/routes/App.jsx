import React from 'react';
//import en App.jsx
// usaremos esas 3 herramientas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


/*
ReactRouterDOM te permite implementar enrutado dinámico 
en la aplicación. Nos facilita pues podemos enrutar 
nuestra app basada en componentes de la app 
(como login o recoverypassword).
*/

/*
¿Qué estamos haciendo?
BrowserRoute sirve para implementar router en el navegador

Switch regresa la primera ruta que coincida. En pocas palabras, 
si estamos en www.platzi.com/contacto , regresará el componente 
que coincida a este (es decir, el componente que contenga la 
lógica de contacto). En esta caso, estamos poniendo varios 
routes dentro de switch, ¿para qué? para que solamente traiga 
esa misma ruta, y no tenga que buscar más. Como si fuese un 
condicional switch de javascript efectivamente. Y por ello 
tenemos un route sin path, que será el valor por defecto.

Layout solamente renderizará el route que coincida 
efectivamente con la URL especificada.
*/
const App = () => {
    return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />			
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route exact path="/send-email" element={<SendEmail />} />
					<Route exact path="/new-password" element={<NewPassword />} />
					<Route exact path="/account" element={<MyAccount />} />
					<Route exact path="/signup" element={<CreateAccount />} />
					<Route exact path="/checkout" element={<Checkout />} />
					<Route exact path="/orders" element={<Orders />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter> 
    );
}

export default App;

