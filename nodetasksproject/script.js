const fs = require("fs");
const path = require("path");
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/test") {
        fs.readFile(path.join(__dirname, "test", "googlehomepage.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type": "text/html"

            });
            res.end(data);
        });
        // fs.readFile(path.join(__dirname, "test/css", "googlehomepage.css"), "utf-8", (err, data) => {
        //     if (err) throw err;
        //     res.writeHead(200, {
        //         "Content-Type": "text/css"

        //     });
        //     res.end(data);
        // });

    }
    if (req.url === "/gmail") {
        fs.readFile(path.join(__dirname, "views", "cont.html"), "utf-8", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type": "text/css"
            });
            res.end(data);
        });
    }
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));