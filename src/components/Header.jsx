import { Link } from "react-router-dom/cjs/react-router-dom";
import "../pages/css/FormPage.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="headersvg-div">
        <img src="/Assets/mile1-assets/logo.svg" alt="logo" />
      </div>
      <div className="tabs-div">
        <div>
          <Link to="/">
            <p>Anasayfa-</p>
          </Link>
        </div>
        <div>
          <Link to="/siparis">
            <p>Sipariş Oluştur</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
