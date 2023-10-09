const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const  {hash}  = require('bcrypt');
const cookieParser = require('cookie-parser')
const salt = 10

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cookieParser())

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
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users"
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

app.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password.toString(), salt, (err, hashedPassword) => {
    if (err) return res.json({ error: "error for hashing password" });

    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json({Status: "Added"});
    });
  });
});

app.post("/login", (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";
  const values = [req.body.email];
  db.query(q, [values], (err, data) => {
    if (err) return res.json({ error: "error for login" });
    if (data.length > 0) {
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, result) => {
        if (err) return res.json({ error: "error for hashing password" });
        if (result) {
          const username = data[0].username;
          const token = jwt.sign({ username }, "secret-key", { expiresIn: '4d' });
          res.cookie("token", token, { maxAge: 900000, httpOnly: true });
          return res.json({ Status: "logedin" });
        } else {
          return res.json({ error: "wrong password" });
        }
      });
    } else {
      return res.json({ error: "user not found" });
    }
  });
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ error: "error in auth" });
  }else{
    jwt.verify(token, "secret-key", (err, decoded) => {
      if (err) {
        return res.json({ error: "error in auth" });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
}

app.get("/data",verifyUser ,(req, res) => {
  return res.json({Status : "success", username : req.username})
});



app.delete("/books/:id",(req, res) => {
  const bookId = req.params.id
  const q = "DELETE FROM books WHERE id = ?"

  db.query(q,[bookId],(err, data)=>{
    if(err) return res.json(err)
    return res.json("book has been deleted")
})
})

app.delete("/users/:id",(req, res) => {
  const userId = req.params.id
  const q = "DELETE FROM users WHERE id = ?"

  db.query(q,[userId],(err, data)=>{
    if(err) return res.json(err)
    return res.json("user deleted")
})
})

app.put("/books/:id",(req, res) => {
  const bookId = req.params.id
  const q = "UPDATE books SET `title`= ?, `desc` = ?,`cover` = ? WHERE id = ? "
  const values = [req.body.title,req.body.desc,req.body.cover]

  db.query(q,[...values,bookId],(err, data)=>{
    if(err) return res.json(err)
    return res.json("book has been updated")
})
})

app.listen(5000, () => {
    console.log(`listening on 5000`)
  })
  