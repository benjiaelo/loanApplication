import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Customers = () => {
  const [customer, setcustomer] = useState([]);

  useEffect(() => {
    const fetchAllcustomer = async () => {
      try {
        const res = await axios.get("http://localhost:8800/customers");
        setcustomer(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllcustomer();
  }, []);

  console.log(customer);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/customers/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>XYZ Admin</h1>
      <div className="customer">
        {customer.map((customer) => (
          <div key={customer.id} className="customer">
            <img src={customer.officer} alt="" />
            <h2>{customer.name}</h2>
            <p>{customer.desc}</p>
            <span>${customer.amount}</span>
            <button
              className="delete"
              onClick={() => handleDelete(customer.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${customer.id}`}
                style={{ color: "inherit", textDecoration: "none" }}>
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Customer
        </Link>
      </button>
    </div>
  );
};

export default Customers;
