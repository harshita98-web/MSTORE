const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken')

app.use(express.static(__dirname + '/dist/ecom-project'));

  app.use(cors());
  
const pool = mysql.createPool({
    connectionLimit : 100,
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bfddcdbeddef7b',
    password: 'a2f0adb7',
    database: 'heroku_adc9e4336121f32',
    port:'3306'
  });

  
app.get('/api/productslist', (req, resp) => {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log('error occures solve it please',err);
    }
    else {
      connection.query(`Select * from category`, (error, rows, fields) => {
        if (error) {
          console.log('error in query', error)
        }
        else {
          resp.send(rows);
        }
      })
    }
  })
});

app.get('/api/categorywise/:id', (req, resp) => {
  let id = parseInt(req.params.id);
  // resp.send(name);
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log('error occures solve it please' ,err);
    }
    else {
      connection.query(`Select * from products WHERE id = ${id}`, (error, rows, fields) => {
        if (error) {
          console.log('error in query', error)
        }
        else {
          resp.send(rows);
        }
      })
    }
  })
});

app.get('/api/products', (req, resp) => {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log('error occures solve it please',err);
    }
    else {
      connection.query(`Select * from product_listing`, (error, rows, fields) => {
        if (error) {
          console.log('error in query', error)
        }
        else {
          resp.send(rows);
        }
      })
    }
  })
});

app.get('/api/subcategory/:catid', (req, resp) => {
  let catid = parseInt(req.params.catid);
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log('error occures solve it please',err);
    }
    else {
      connection.query(`Select * from sub_category WHERE category_id = ${catid}`, (error, rows, fields) => {
        if (error) {
          console.log('error in query', error)
        }
        else {
          resp.send(rows);
        }
      })
    }
  })
});

// app.post('/api/login', (req, res) => {
//   const token = jwt.sign({ user: '1', name: 'harshita' }, 'my_secret_key');
//   res.json({
//     token: token
//   });
// });

// function verifytoken(){
//   jwt.verify
// }


//   app.listen(3000, () => {
//     console.log('Server is running at port 3000');
// });

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
