const http = require("http");

const host = "127.0.0.1";
const port = process.env.PORT || '3001';

const requestListener = function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(req.headers['host']);
};

http.createServer(requestListener).listen(port, host);
