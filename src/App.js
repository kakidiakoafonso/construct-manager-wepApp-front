import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Predios from './pages/Predios';
import Estradas from './pages/Estradas';
// import Login from './pages/Login';
import AddPredios from './pages/AddPredios';
import PredioContext from './Providers/PredioContext';
import EstradaContext from './Providers/EstradaContext';
import AddEstradas from './pages/AddEstrada';
import UpdatePedio from './pages/UpdatePedio';
import UpdateEstradas from './pages/UpdateEstrada';

function App() 
{
  return (
    <>
      <ChakraProvider>
          <PredioContext>
            <EstradaContext>
              <Router>
                <Navbar />
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/home' exact component={Home} />
                  
                  <Route path='/predios' component={Predios} />
                  <Route path='/addpredio' component={AddPredios} />
                  <Route path='/updatepredio' component={UpdatePedio} />
                  
                  <Route path='/estradas' component={Estradas} />
                  <Route path='/addestradas' component={AddEstradas} />
                  <Route path='/updateestradas' component={UpdateEstradas} />
                </Switch>
              </Router>
            </EstradaContext>
          </PredioContext>
      </ChakraProvider>
    </>
  );
}

export default App;
