import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <div className={`NavBar ${active && "active"}`}>
      <Container>
        <div className="NavBar_Container">
          <img
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt=""
          />

          <div className="NavBar_Lists">
            <ul>
              <li>Our Story</li>
              <li>Membership</li>
              <li>Write</li>
              <li>Sign In</li>
              <li>
                <Button>Get Started</Button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
