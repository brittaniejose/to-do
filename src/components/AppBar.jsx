import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function AppBar() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand>
            To-Do List Manager
        </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppBar
