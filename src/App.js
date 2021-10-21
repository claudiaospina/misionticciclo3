import React from 'react';
import './App.css';
import RegisterProducts from './ManageProducts/RegisterProducts';
import UsersRegister from './UsersRegister/UsersRegister';
import UsersForm from './UsersForm/UsersForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import ListProducts from './ManageProducts/GestionProductos';
import GestionVentas from './ManageProducts/GestionVentas';
import FooterComponent from './shared/components/footer/footerComponent';
import ListVentas from './ManageSales/ListVentas';
import GestionVent from './ManageSales/GestionVent';
import RegisterVentas from './ManageSales/RegisterVentas';

function App() {
  return (
    <Router>
      <NavbarComponent title="Textiles la 15" />
      <Switch>
        <Route path="/" exact>
          <h1>Hola Mundo</h1>
        </Route>
        <Route path="/login" exact>
          <h1>Elemento Login</h1>
        </Route>
        <Route path="/register" exact>
          <UsersRegister />
        </Route>
        <Route path="/registerProducts" exact>
          <RegisterProducts />
        </Route>
        <Route path="/listProducts" exact>
          <ListProducts/>
        </Route>
        <Route path="/GestionVentas" exact>
          <GestionVentas />
        </Route>
        <Route path="/usersForm" exact>
          <UsersForm />
        </Route>
        <Route path="/ListVentas" exact>
          <ListVentas />
        </Route>
        <Route path="/GestionVent" exact>
          <GestionVent />
        </Route>
        <Route path="/RegisterVentas" exact>
          <RegisterVentas />
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}

export default App;
