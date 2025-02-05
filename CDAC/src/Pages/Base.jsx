import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Base() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Tiffin Delivery
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link  text-white active" aria-current="page" href="#" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="/VendorsHomePage" >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/CustomerHomePage">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/SignIn" >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/SignUp" >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Full background image */}
      <div
        style={{
          backgroundImage: "url('/a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flex: 1,
        }}
      ></div>

      {/* Footer */}
      <footer
        className="navbar navbar-dark bg-dark"
        style={{
          padding: "10px 20px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Center Text */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <span>All rights reserved © 2025</span>
        </div>

        {/* Follow Us */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ marginRight: "10px" }}>Follow us:</span>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4267B2", fontSize: "20px" }} // Facebook Blue
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#E1306C", // Instagram Pinkish Gradient
              fontSize: "20px",
            }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1DA1F2", fontSize: "20px" }} // Twitter Blue
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Base;
