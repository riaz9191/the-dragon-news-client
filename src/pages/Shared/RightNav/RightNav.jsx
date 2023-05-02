import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg1.png";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className="mt-4">Login With</h4>
        <Button className="mb-2" variant="outline-secondary">
          <FaGoogle /> Login with Google
        </Button>{" "}
        <Button variant="outline-secondary">
          <FaGithub /> Login with GitHub
        </Button>{" "}
      </div>
      <div>
        <h4 className="mt-3">Find Us on</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div className="position-relative text-center">
        <img src={bg} alt="" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h3 className="text-white fw-bold">Create an Amazing Newspaper</h3>
          <p className="text-secondary">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger">Learn More</Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default RightNav;
