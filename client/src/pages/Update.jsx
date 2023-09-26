import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [customer, setcustomer] = useState({
    name: "",
    desc: "",
    amount: null,
    officer: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const customerId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setcustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8800/customers/${customerId}`,
        customer
      );
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the customer</h1>
      <input
        type="text"
        placeholder="customer name"
        name="name"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="customer desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="customer amount"
        name="amount"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="customer officer"
        name="officer"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all customers</Link>
    </div>
  );
};

export default Update;
