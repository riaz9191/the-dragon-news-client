import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and condition</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        quibusdam harum, amet fugit velit saepe aspernatur totam ipsum quaerat
        eius cum, quae non cumque recusandae blanditiis eum. Quaerat, corporis
        iure.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
