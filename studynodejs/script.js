/*console.log("running");
const array = ["a", "b", "c"];
console.log(array);
const newArray = [...array, "e"];
console.log(newArray);
const check = [array, "e"];
console.log(check, array);*/

/*setInterval(() => {
    console.log("running");

}, 1000);*/
/*const interval = setInterval(() => {
    console.log("running");

}, 1000);*/


/*setTimeout(() => {
    console.log("running");

}, 1000);*/


/*const interval = setInterval(() => {
    console.log("running");

}, 1000);
setTimeout(() => {
    clearInterval(interval)

}, 3000);*/

// console.log(global);

/*console.log(__dirname);
console.log(__filename);*/

/*const path = require("path");
// console.log(path);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));*/

/*const path = require("path");
console.log(path.join(__dirname, "apifolder", "script.js"));*/

// const fs = require("fs");
// const path = require("path");
// console.log(fs);
/*fs.mkdir(path.join(__dirname, "/api"), {}, (err) => {
    if (err) throw err;
});*/
/*fs.mkdir(path.join(__dirname, "/api/api1"), {}, (err) => {
    if (err) throw err;
});*/
/*fs.rmdir(path.join(__dirname, "api/api1"), {}, (err) => {
    if (err) throw err;
});*/
/*fs.mkdir(path.join(__dirname, "/api/api1"), {}, (err) => {
    if (err) throw err;
});*/
/*fs.rmdir(path.join(__dirname, "api"), {
    recursive: true
}, (err) => {
    if (err) throw err;
});*/
/*fs.mkdir(path.join(__dirname, "/api"), {}, (err) => {
    if (err) throw err;
});*/
/*fs.writeFile(path.join(__dirname, "/api", "api.text"), "username:debug media", (err) => {
    if (err) throw err;
});*/
/*const user = "abhi";
fs.appendFile(path.join(__dirname, "/api", "api.text"), `username:${user}`, (err) => {
    if (err) throw err
});*/
/*const user1 = "abhi1";
fs.appendFile(path.join(__dirname, "/api", "api.text"), `\n username:${user1}`, (err) => {
    if (err) throw err
});*/
/*fs.readFile(path.join(__dirname, "/api", "api.text"), "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});*/
/*const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("message", (data) => console.log(data.text));
emitter.emit("message", {
    text: "userlogged"
});*/


//method1
/*const http = require("http");
http.createServer((req, res) => {
    res.write("this is nodejs");
    res.end();
}).listen(3001, () => console.log("server is reunning"));*/


//method2
/*const http = require("http");
const server = http.createServer((req, res) => {
    res.write("this is nodemon");
    console.log(req.url);
    res.end();
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));*/


/*const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end("<h1>content type specifying</h1>");
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));*/

/*const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end("<h1>content type specifying</h1>");
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));*/


/*const fs = require("fs");
const path = require("path");
const http = require("http");
// fs.mkdir(path.join(__dirname, "views"), {}, (err) => {
//     if (err) throw err;
// });
// fs.writeFile(path.join(__dirname, "/views", "home.html"), "", (err) => {
//     if (err) throw err;
// });
const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, "views", "home.html"), "utf-8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(data);
    });
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));*/

/*const fs = require("fs");
const path = require("path");
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        fs.readFile(path.join(__dirname, "views", "home.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        });
    }
    if (req.url === "/contact") {
        fs.readFile(path.join(__dirname, "views", "contact.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        });
    }
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));*/