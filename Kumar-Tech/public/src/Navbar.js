import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <div>
        <Navbar>
          <Container fluid>
            <Navbar.Brand href="./" style={{ color: "blue", fontSize: "200%"}}>
              Kumar Technical
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div style={{ paddingLeft: "70%" }}>
                <Nav className="ml-auto ml-2 ml-lg-0">
                  <Nav.Link href="./">Home</Nav.Link>
                  <Nav.Link href="./contact">Contact</Nav.Link>
                  <Nav.Link href="./service">Services</Nav.Link>
                  <Nav.Link href="./about">About</Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
