import "../pages/css/FormPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="food-div">
        <p>Position Absolute Acı Pizza</p>
      </div>
      <div className="price-point-container">
        <div className="price-div">
          <p>85.50₺</p>
        </div>
        <div className="point-info-div">
          <p>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <div className="food-text-info">
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}
