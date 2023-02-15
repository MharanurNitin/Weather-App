import React from 'react'
import "./Nav.css"
function Nav() {
    let link="https://imgs.search.brave.com/8oVL9P7GC4UlSiyVR-BYkI_CrcQhhOgG3oFWKHik2vw/rs:fit:512:512:1/g:ce/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9w/YXBpcnVzLXRlYW0v/cGFwaXJ1cy1hcHBz/LzUxMi93ZWF0aGVy/LWljb24ucG5n";
  return (
    <div className="navbar">
      <img src={link} />
      <h1>WeatherApp</h1>
    </div>
  );
}

export default Nav