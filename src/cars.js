import React from "react";
import Carslist from "./carslist";

function Cars() {
  const [input, setInput] = React.useState([
    {
      carBrand: "",
      carModel: "",
      quantity: "",
    },
  ]);

  const [value, setValue] = React.useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    setValue([...value, input]);

    // console.log([...input, value  ])

    setInput({
      carBrand: "",
      carModel: "",
      quantity: "",
    });
  };

  console.log(value);
  return (
    <div>
      <h1>Add Cars to Showroom</h1>
      <div>
        <form type="submit">
          <label>Car Brand</label>
          <input name="carBrand" value={input.carBrand} onChange={onChange} />
          <br />
          <label>Car Model</label>
          <input name="carModel" value={input.carModel} onChange={onChange} />
          <br />
          <label>Quantity Recieved</label>
          <input name="quantity" value={input.quantity} onChange={onChange} />

          <button type="submit" onClick={onSubmit}>
            Add
          </button>
        </form>
        <div>
          <Carslist value={value} />
        </div>
      </div>
    </div>
  );
}

export default Cars;
