import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lamadev123",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/customers", (req, res) => {
  const q = "SELECT * FROM customers";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/customers", (req, res) => {
  const q =
    "INSERT INTO customers(`name`, `desc`, `amount`, `officer`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.desc,
    req.body.amount,
    req.body.officer,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/customers/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM customers WHERE id = ? ";

  db.query(q, [customerId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/customers/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE customers SET `name`= ?, `desc`= ?, `amount`= ?, `officer`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.desc,
    req.body.amount,
    req.body.officer,
  ];

  db.query(q, [...values, customerId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
