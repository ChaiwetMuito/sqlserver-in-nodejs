var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'P@d0rU123',
        server: '167.71.200.91', 
        database: 'Padoru' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query(`SELECT d.name,COUNT(e.gender) AS "count_female"
        FROM  Department d , Employee e
        WHERE d.id = e.dep_id AND e.gender = 'F' 
        GROUP BY d.name
        HAVING COUNT(e.gender) > 2`, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(3000, function () {
    console.log('Server is running.. : localhost:3000');
});