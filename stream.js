const fs = require('fs');

// const readableStream = fs.createReadStream('largeFile.txt','utf-8');

const writableStream = fs.createWriteStream('./bigfile.txt');

for (let i = 0; i < 100; i ++){
    writableStream.write("Classic Lorem Ipsum Filler Text Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante");
}

// readableStream.on('data', (chunk)=>{
//     console.log('Received',chunk);
// })

// readableStream.on('end',(chunk) => {
//     console.log('Finished Reading file');
// })

// readableStream.on('error', (err) =>{
//     console.log('Error reading file');
// })