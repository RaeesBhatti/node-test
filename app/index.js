const http = require("http");

const host = "127.0.0.1";
const port = process.env.PORT || '3001';

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

export default requestListener;
