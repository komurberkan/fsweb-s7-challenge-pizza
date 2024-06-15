import { Form, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const [options, setOptions] = useState([
  {
    label: "item 1",
    name: "Pepperoni",
  },
  {
    label: "item 2",
    name: "Tavuk Izgara",
  },
  {
    label: "item 3",
    name: "Mısır",
  },
  {
    label: "item 4",
    name: "Sarımsak",
  },
  {
    label: "item 5",
    name: "Ananas",
  },
  {
    label: "item 6",
    name: "Sosis",
  },
  {
    label: "item 7",
    name: "Soğan",
  },
  {
    label: "item 8",
    name: "Sucuk",
  },
  {
    label: "item 9",
    name: "Biber",
  },
  {
    label: "item 10",
    name: "Kabak",
  },
  {
    label: "item 11",
    name: "Kanada Jambonu",
  },
  {
    label: "item 12",
    name: "Domates",
  },
  {
    label: "item 13",
    name: "Jalepeno",
  },
]);
function handleSelectOption(label) {
  const newItems = [...options];
  const newOptions = newItems.map((item) => {
    return {
      ...item,
      name: item.label === label,
    };
  });

  setOptions(newOptions);
}

export default function Checkboxs() {
  return (
    <>
      <Form className="checkbox-form">
        <FormGroup>
          <Input type="checkbox" />
          <Label>
            {checkboxData.map((item, i) => {
              return item[i];
            })}
          </Label>
        </FormGroup>
      </Form>
    </>
  );
}
