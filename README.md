# SQL server in Node.js

### 1. create server.js and write the following code.
```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(3000, function () {
    console.log('Server is running..');
});
```

### 2. install mssql 
```
npm install mssql
```

### 3. install express 
```
npm install express
```
### 4. เชื่อมต่อกับ database 
```
user: 'sa',
password: 'P@d0rU123',
server: '167.71.200.91', 
database: 'Padoru'
```
### 5. query to the database
```
request.query('select * from employee', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
```
### 6. run api
```
node server.js
และไปดูที่ localhost:3000
```

### ศึกษาเพิ่มเติมจาก
>[sqlserver-in-node.js]https://www.tutorialsteacher.com/nodejs/access-sql-server-in-nodejs
>
