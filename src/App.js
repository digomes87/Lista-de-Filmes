import React, { useState} from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,

 } from 'reactstrap'

function App() {
  const [open, setOpen] = useState(false)
  const toggle = () =>{
    setOpen(!open)
  }
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={open} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#'>Masculino</NavLink>
                <NavLink href='#'>Feminino</NavLink>
                {/*<NavLink href='#'>Camisa</NavLink>
                <NavLink href='#'>Bermuda</NavLink>
                <NavLink href='#'>Infantil</NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
}

export default App
