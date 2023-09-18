import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import web from "./Images/download.jpeg";
import web2 from "./Images/app.jpeg";
import web3 from "./Images/ui.jpeg";
import web4 from "./Images/mark.jpeg";
import web5 from "./Images/android.png";
import web6 from "./Images/digital.png";
function Service() {
  return (
    <>
      <div style={{textAlign: "center", padding: "5%"}}>
        <h1 className="tab-center">Our Services</h1>
      </div>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={web} rounded />
                <h4> Web Development</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={web2} rounded />
                <h4> App Development </h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={web3} rounded />
                <h4> UI/UX</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={web4} rounded />
                <h4> Marketing</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={web5} rounded />
                <h4> Android Development</h4>
              </Col>
              <Col xs={6} md={4}>
                <Image src={web6} rounded />
                <h4> Digital Marketing</h4>
              </Col>
            </Row>
          </Container>
    </>
  );
}

export default Service;
