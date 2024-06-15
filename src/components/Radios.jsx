import { Form, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/FormPage.css";
export default function Radios() {
  return (
    <>
      <Form>
        <p className="pastry-size">
          Boyut Seç <span className="star-must">*</span>
        </p>
        <FormGroup>
          <Input name="radio1" type="radio" />
          <Label className="radio-labels">Küçük</Label>
        </FormGroup>
        <FormGroup>
          <Input name="radio1" type="radio" />
          <Label className="radio-labels">Orta</Label>
        </FormGroup>
        <FormGroup>
          <Input name="radio1" type="radio" />
          <Label className="radio-labels">Büyük</Label>
        </FormGroup>

        <Input bsSize="sm" className="select" type="select">
          <option selected>Hamur Kalınlığı</option>
          <option>İnce</option>
          <option>Orta</option>
          <option>Kalın</option>
        </Input>
      </Form>
      <div className="explanation-div">
        <p className="pastry-size">Ek Malzemeler</p>
        <p className="limit-choice">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>
    </>
  );
}
