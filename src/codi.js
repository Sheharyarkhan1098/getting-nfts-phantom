import React from "react";
// import {
//   Nav,
//   Navbar,
//   Container,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button,
// } from "react-bootstrap";
import { Wallet } from "./phantomWallet";

const Codi = () => {
  return (
    <>
      {/* <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <a className="navbar-brand" href="https://codi.finance/">
              <img
                src="/image/logo1.png"
                style={{ height: "50px", width: "75px;" }}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "white" }}>
                <img src="/image/Image 4.png" height="65%" />
                Staking
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <button
                className=" btn "
                style={{ backgroundColor: "#135098;", color: "white" }}
              >
                Project
              </button>
              <button className=" btn " style={{ color: "white" }}>
                New Pool
              </button>

              <Button variant="outline-success">Login </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <br />
      <h2 style={{ textAlign: "center", color: "#27A1FB" }}> IDO ENDED</h2>
      <br /> */}
      {<Wallet />}
      {/* <div
        className="transe mx-auto mt-5"
        style={{
          backgroundColor: "rgba(192,193,193,0.3)",
          borderRadius: 5,
          marginBottom: "10%",
        }}
      >
        <div className="d-flex" style={{ flexDirection: "column" }}>
          <br />
          <img
            src="/image/logo1.png"
            height="40px"
            width="100px"
            className="mx-auto"
          ></img>

          <span
            style={{ color: "white", fontSize: "10px", textAlign: "center" }}
          >
            For Private Deals Contact{" "}
            <a
              href="mailto:sales@codi.finance"
              target="_blank"
              style={{ color: "#27A1FB", textDecoration: "none" }}
              className="ml-2"
            >
              sales@codi.finance
            </a>
          </span>
          <div className="mx-auto mar">
            <a
              href="https://t.me/codi_finance_community"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <img src="/image/i2.png" className="logo"></img>
            </a>
            <a
              href="https://medium.com/@Codi.finance"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <img src="/image/i1.png" className="logo"></img>
            </a>

            <a
              href="https://twitter.com/Codi_Finance "
              style={{ textDecoration: "none" }}
            >
              {" "}
              <img src="/image/i3.png" className="logo"></img>
            </a>
            <a
              href=" https://codifinance.gitbook.io/codifinance/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <img src="/image/i4.png" className="logo"></img>
            </a>
            <a
              href="https://discord.gg/CgjES5E2AG"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <img src="/image/i5.png" className="logo"></img>
            </a>
          </div>
          <br />
          <p style={{ color: "white", fontSize: "8px", textAlign: "center" }}>
            {" "}
            © CODI Finance. ALL Right Reserved
          </p>
        </div>
      </div> */}
    </>
  );
};
export default Codi;
