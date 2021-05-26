import { Button, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const PostNav = () => {
  return (
    <div className="PostNav">
      <Container>
        <div className="PostNav_Container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://miro.medium.com/max/211/1*3JpFy_cqGKInkYACk6EBEg.png"
              alt="logo"
            />
          </Link>

          <div>
            <Button style={{ marginRight: "10px" }}>Sign in</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostNav;
