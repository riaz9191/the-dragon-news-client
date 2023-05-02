import React, { useContext } from "react";
import moment from "moment";
import logo from "../../../assets/logo.png";
import { Button, Container,  } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../providers/AUthProvider";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </p>
      </div>
      <div className="d-flex bg-light">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className="text-danger" pauseOnHover>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Asperiores, quisquam.
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
