import React from 'react';

function Header() {
  return (
    <div>
      <header className="links">
        <a
          className="medium icon"
          href="https://github.com/tiffythinhdang"
          target="_blank">
          <img src="../assets/github_icon_green.png" alt="github-icon" />
        </a>
        <a
          className="medium icon"
          href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/"
          target="_blank">
          <img src="../assets/linkedin_icon_green.png" alt="linkedin-icon" />
        </a>
        <a
          className="medium icon"
          href="https://tiffanytdang.com/"
          target="_blank">
          <img src="../assets/contact_icon_green.png" alt="contact-icon" />
        </a>
      </header>

      <h1 className="game-title">bentoUp</h1>
    </div>
  )
}

export default Header;
