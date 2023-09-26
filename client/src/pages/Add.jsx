import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [cutomer, setCustomer] = useState({
    name: "",
    desc: "",
    amount: null,
    officer: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/cutomers", cutomer);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Loan Application Page</h1>
      <input
        type="text"
        placeholder="Customer Name"
        name="Name"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Customer Information"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Amount Allocated"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Officer in Charge"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all Customers</Link>
    </div>
  );
};

export default Add;
