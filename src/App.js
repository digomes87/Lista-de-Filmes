import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom' //Controla a navegacao

import Home from './Home'
// import Sobre from './Sobre'
import NovaSeries from './NovaSeries'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                  <img src="../images/logo.png" alt="Logo" height="30" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  {/* <li><Link to="/Sobre">Sobre</Link></li> */}
                  <li><Link to="/Novo/">Novos</Link></li>
                </ul>
              </div>

            </div>
          </nav>
          {/* Aqui estou dizendo atravez do Route que minha home deve ser exatamente meu componete Home, assim como posso definir qlqr outro como home */}
          <Route exact path='/' component={Home} />
          <Route exact path='/Novo/' component={NovaSeries} />
          {/* <Route exact path='/Sobre' component={Sobre} /> */}
          {/* <Home /> */}
        </div>
      </Router>
    );
  }
}
export default App
