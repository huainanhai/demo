const chalk = require('chalk');
const package = require('../package.json');
// console.log(chalk.red(11));
// console.log(chalk.red.bold.bgGreen(333));
const fs = require('fs');
const path = require('path');
// fs.linkSync(path.resolve(__dirname, '../tmp/hello'))
try {
    // fs.unlink(path.resolve(__dirname, '../tmp/hello'))
    // fs.unlinkSync('../tmp/hello')
    // console.log('成功删除/tmp/hello ');
} catch (error) {
    console.log(error);
}

/**
 *
 *ß
 * @param {*} dir
 * @returns
 */
function pathResolve(dir) {
    return path.resolve(__dirname, '../', dir);
}

try {
    fs.rename(
        path.resolve(__dirname, '../tmp/hello'),
        path.resolve(__dirname, '../tmp/world'),
        err => {
            if (err.code=="ENOENT") {
                console.log('文件不存在');
                throw JSON.stringify(err);
            }
            fs.stat(path.resolve(__dirname, '../tmp/world'), (err, stats) => {
                if (err) throw err;
                console.log(`文件属性：${JSON.stringify(stats)}`);
            })
        });
} catch (error) {
    // console.log(error);
}
//output
fs.open(path.resolve(__dirname, './file.txt'), 'r', (err, fd) => {
    if (err) throw err;
    fs.fstat(fd, (err, stat) => {
        if (err) throw err;
        // console.log("read complete", stat);
        fs.close(fd, err => {
            if (err) throw err;
        })
    })
});
//TODO: 55
const fsWatcher = fs.watch(path.resolve(__dirname, '../node'), { encoding: 'buffer' }, (eventType, fileName) => {
    if (fileName) {
        console.log(fileName.toString());
        // filexName.forEach(byte =>{
        //     console.log(String.fromCharCode(byte));
        // })
    }
});
fsWatcher.close()
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'file.txt'));

for (let i = 0, count = 10; i < count; i++) {
    writeStream.write(`\n\n${i}`);
}
writeStream.on('finish', () => {
    console.log('end');

})
writeStream.end();


const readStream = fs.createReadStream(path.resolve(__dirname, 'file.txt'));
readStream.on('open', fd => {
    console.log(66, fd);
})
readStream.on('ready', () => {
    console.log('ready');
})
readStream.on('readable', ()=>{
    console.log('readable');
})
readStream.on('data', chunk=>{
    console.log('data', chunk);
})
readStream.on('end', ()=>{
    console.log('end');
})
readStream.on('close',()=>{
    console.log('close');
})
readStream.close();

console.log(5);
