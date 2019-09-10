import React, { useState, Component } from 'react'
import axios from 'axios'
import api from './Api'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,

} from 'reactstrap'

// function App() {
//   const [open, setOpen] = useState(false)
//   const toggle = () =>{
//     setOpen(!open)
//   }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      isLoanding: false
    }
  }

  componentDidMount() {
    this.setState({ isLoanding: true })
    api.loadGenres().then((res) => {
      this.setState({
        isLoanding: false,
        genres: res.data
      })
    })

    // axios.get('http://localhost:3001/genres').then((res)=>console.log(res))
  }

  renderLink(genres){
    return (
      <span><a href="">{genres}</a></span>
    )
  }
  render() {
    return (
      <div>
        {/* <Navbar color='light' light expand='md'>
        <NavbarBrand>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={open} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#'>Masculino</NavLink>
                <NavLink href='#'>Feminino</NavLink>
                <NavLink href='#'>Camisa</NavLink>
                <NavLink href='#'>Bermuda</NavLink>
                <NavLink href='#'>Infantil</NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar> */}

        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header page-scroll">
              <a className="navbar-brand page-scroll" href="#page-top">
                <img src="images/logo.png" height="30" />
              </a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="">Menu item</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>


        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1><img src="images/logo.png" alt="Logo" /></h1>
                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          {
            this.state.isLoanding &&
            <span>Aguarde carregando....</span>
          }

          {
            !this.state.isLoanding &&
            <span>{(this.state.genres.map(this.renderLink))}</span>
          }
        </section>
      </div>
    );
  }
}
export default App
