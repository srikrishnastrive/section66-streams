const fs = require('fs');

const server = require('http').createServer();


server.on('request', (req,res) => {
    //here we are not using streams
    // fs.readFile('./bigfile.txt', (err,data)=>{
    //     if (err) throw err;
    //     res.end(data);
    // })
    const streams = fs.createReadStream('./bigfile.txt');
    streams.pipe(res);
})


server.listen(8000);