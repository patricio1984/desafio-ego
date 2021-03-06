import React, { useState, useEffect} from 'react';
import ModelFooter from "./components/Models/ModelFooter";
import FileModel from "./components/FileModel/FileModel";
import Navbar from "./components/Nav/Navbar";
import Models from "./components/Models/Models";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Logo from "./assets/img/logo.png";
import Spinner from "./components/Spinner";


function App() {

  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])

  return (
    <>
        { loading ?
           <Spinner loading={loading} />
        :
        <main> 
        <Router>
            <div className="content-container">   
              <nav className="navbar">
              <Link to={'/models'}>
                <img src={Logo} className="logo" alt="Ego Logo" />
              </Link>
                  <div className="menu-container">
                      <NavLink exact to={'/models'} className="menu-items" activeClassName="menu-items-active">Modelos</NavLink>
                      <NavLink exact to={`/models/:id`} className="menu-items" activeClassName="menu-items-active">Ficha del Modelo</NavLink>
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
        }
    </>
  );
}

export default App;
