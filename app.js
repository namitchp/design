const express = require("express");
const app = express();
var cors = require("cors");
// const data = require('./api/data.js')

var fs = require("fs");
// const { strictEqual } = require("assert");

app.use(cors());
app.use(express.json())
    // app.use('/insert', data)

app.get("/data", (req, res, next) => {
    fs.readFile("./file/index.txt", "utf8", function(err, data) {
        if (err) throw err;
        console.log(data)
        // let newRow = data.replace("\r", "").split("\n");
let newIndex=data.split("\n")
        // console.log(data.slice(0, 30))
        // console.log(data)
        res.status(200).json({
            message: "txt file data",
            // data: data,
            data2: newIndex,
           
        });
        // res.send(data)
        // console.log(data.length)
    });
});
app.get("/page1", (req, res, next) => {
    fs.readFile("./file/Page1.txt", "utf8", function(err, data) {
        if (err) throw err;
        console.log(data)
        // let newRow = data.replace("\r", "").split("\n");

        console.log(data.slice(0, 30))
        console.log(data)
        res.status(200).json({
            message: "txt file data",
            data: data,
         
 
        });
    })
        });
        app.get("/page2", (req, res, next) => {
            fs.readFile("./file/Page2.txt", "utf8", function(err, data) {
                if (err) throw err;
                console.log(data)
                // let newRow = data.replace("\r", "").split("\n");
        
                console.log(data.slice(0, 30))
                console.log(data)
                res.status(200).json({
                    message: "txt file data",
                    data: data,
                 
         
                });
            })
            
        
             
                });
                app.get("/page3", (req, res, next) => {
                    fs.readFile("./file/Page3.txt", "utf8", function(err, data) {
                        if (err) throw err;
                        console.log(data)
                        // let newRow = data.replace("\r", "").split("\n");
                
                        console.log(data.slice(0, 30))
                        console.log(data)
                        res.status(200).json({
                            message: "txt file data",
                            data: data,
                         
                 
                        });
                    })
                    
                
                        })
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

// app.get('/', (req, res, next) => {
//     res.send("ionia start")
//     console.log("ionia app start")
// })
const port = process.env.Port || 9000;
app.listen(port, (res, req, next) => {
    console.log("server lisen " + port);
});