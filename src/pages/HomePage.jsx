import { Link } from "react-router-dom";
import "./css/HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <div>
        <div className="home-div">
          <div>
            <img src="/Assets/mile1-assets/logo.svg" alt="logo" />
          </div>
          <div className="p-div">
            <p>KOD ACIKTIRIR, PIZZA DOYURUR</p>
          </div>
          <Link to="/siparis">
            <button className="aciktim-btn">
              <p>ACIKTIM</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
