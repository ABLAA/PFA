const express=require('express');
const app=express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "PFA"
      },
      console.log("cnx"));
    
      
app.post('/api/users',(req,res)=>{
  con.connect(function(err) {
                              if (err) throw err;
                              const query="INSERT INTO `Clients`(`cin`, `email`) VALUES (?,?)";
                              con.query(query,["9",req.body.email], function (err, result, fields) {
                             if (err) throw err;
                                res.sendStatus(200);
                                console.log(JSON.stringify(result));

                            });



  });
  
})



var port= process.env.PORT || 3000;
app.listen(3000,()=>console.log(`listening on ${port}`));
