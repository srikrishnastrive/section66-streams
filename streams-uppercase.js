const fs = require('fs');

// const writableStream = fs.createWriteStream('./uppercase.txt');


// for (let i = 0; i < 100; i++){
//     writableStream.write("Classic Lorem Ipsum Filler Text Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante");
    
// }

const readableStream = fs.createReadStream('./uppercase.txt','utf-8');


readableStream.on('data', (chunk) => {
    console.log('received chunk',chunk);
});

readableStream.on('end',(chunk) => {
    console.log('finished reading file');
});

readableStream.on('error', (err) => {
    console.error('Error reading file');
});

//writing all files to upper case

const {Transform} = require('stream');

const upperCaseTransform = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

const writableStream = fs.createWriteStream('./textUppercase.txt');

writableStream.on('finish',() => {
    console.log("finished writing files");
});

readableStream
.pipe(upperCaseTransform)
.pipe(writableStream);