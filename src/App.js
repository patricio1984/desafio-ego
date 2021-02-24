import React from 'react';
import ModelFooter from "./components/Models/ModelFooter";
import FileModel from "./components/FileModel/FileModel";
import Navbar from "./components/Nav/Navbar";
import Models from "./components/Models/Models";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Logo from "./assets/img/logo.png";
import ModelsProvider from "./context/ModelsContext";


function App() {

  return (
    <ModelsProvider>
          <main> 
            <Router>
                <div className="content-container">   
                  <nav className="navbar">
                      <img src={Logo} className="logo" alt="Ego Logo" />
                      <div className="menu-container">
                          <Link to={'/models'} className="menu-items">Modelos</Link>
                          <Link to={`/models/:id`} className="menu-items">Ficha del Modelo</Link>
                      </div>
                      <div className="bottom-line"></div>             
                  </nav>
                  <Switch>
                    <Route exact path="/"><Redirect to="/models"/></Route>
                    <Route exact path='/models' component={Models} />
                    <Route exact path='/models/:id' component={FileModel} />
                  </Switch>
                
                  <Navbar />
                </div>
              <ModelFooter />
            </Router>
          </main>
    </ModelsProvider>
  );
}

export default App;
