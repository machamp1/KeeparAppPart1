import React from "react";

function Footer() {
  // const date = new Date();
  // const year = date.getFullYear();
  const year1 = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p> Copyrightⓒ {year1} </p>
      </footer>
    </div>
  );
}

export default Footer;
