import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  let navigate = useNavigate();

  let User = async () => {
    try {
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="dash">
        <Navbar className="nav" expand="md">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand className="text-white mx-auto brand-text">
              Blend With Nature
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto">
              <Button className="nav-btn" onClick={() => User()}>
                Signup/Login
              </Button>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="car">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img src="./images/row of dress.jpg" alt="First slide" />
              <Carousel.Caption>
                <h5> Don't just choose Colors , Choose to Blend with Nature</h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/Happy-girl.jpg.png" alt="Second slide" />
              <Carousel.Caption>
                <h5>Match the color with Desert</h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/normal1.jpg.png" alt="Third slide" />
              <Carousel.Caption>
                <h5></h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/dress collection.png" alt="First slide" />
              <Carousel.Caption>
                <h5>Choose Color to Shine in the Night</h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/normal2.jpg.png" alt="First slide" />
              <Carousel.Caption>
                <h5>Choose Color to Blossom in Autumn</h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/nature.jpg.png" alt="First slide" />
              <Carousel.Caption>
                <h5>Match the Color to Fly in the Sky</h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/normal3.jpg.png" alt="First slide" />
              <Carousel.Caption>
                <h5>Match with the Colors in the Street</h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;