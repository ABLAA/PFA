const express=require('express');
const app=express();
var mysql = require('mysql');


const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
]; 

var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "bd"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM user", function (err, result, fields) {
          if (err) throw err;
          console.log(JSON.stringify(result));
        });
      });
// app.get('/',(req,res)=>{
//                 res.send('hello world');
// })
// app.get('/api/courses',(req,res)=>{
//         res.send([1,2,3]);

// })
// app.get('/api/courses/:id',(req,res)=>{
//       const course= courses.find(c=>c.id===parseInt( req.params.id));
//         if(!course) res.status(404).send('the course was not found');
//         res.send(course);
// })
// var port= process.env.PORT || 3000;
// app.listen(3000,()=>console.log(`listening on ${port}`));
