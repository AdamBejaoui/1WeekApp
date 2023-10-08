const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Adam',
  password: 'Adouma1243',
  database: 'bookstore',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books"
  db.query(q,(err, data)=>{
      if(err) return res.json(err)
      return res.json(data)
  })
})


app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
  const values = [req.body.title,req.body.desc,req.body.cover]

  db.query(q,[values],(err, data)=>{
      if(err) return res.json(err)
      return res.json("book added to your books")
  })
})


app.listen(5000, () => {
    console.log(`listening on 5000`)
  })
  