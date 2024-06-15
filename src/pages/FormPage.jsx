import "./css/FormPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkbox from "../components/Checkboxs.jsx";
import Radios from "../components/Radios.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";

export default function FormPage() {
  return (
    <>
      <Header />
      <Main />
      <Radios />
      <Checkbox />
    </>
  );
}
