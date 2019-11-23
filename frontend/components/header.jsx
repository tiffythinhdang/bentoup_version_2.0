import React from 'react';

import iconGihub from "assets/images/github_icon_green.png";
import iconLinkedin from "assets/images/linkedin_icon_green.png";
import iconContact from "assets/images/contact_icon_green.png";

const Header = () => {
  return (
    <div>
      <header className="links">
        <a
          className="medium icon"
          href="https://github.com/tiffythinhdang"
          target="_blank">
          <img src={iconGihub} alt="github-icon" />
        </a>
        <a
          className="medium icon"
          href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/"
          target="_blank">
          <img src={iconLinkedin} alt="linkedin-icon" />
        </a>
        <a
          className="medium icon"
          href="https://tiffanytdang.com/"
          target="_blank">
          <img src={iconContact} alt="contact-icon" />
        </a>
      </header>

      <h1 className="game-title">bentoUp</h1>
    </div>
  )
};

export default Header;
