const chalk = require('chalk');
const package = require('../package.json');
console.log(chalk.red(11));
console.log(chalk.red.bold.bgGreen(333));
const fs = require('fs');
const path = require('path');
// fs.linkSync(path.resolve(__dirname, '../tmp/hello'))
try {
    // fs.unlink(path.resolve(__dirname, '../tmp/hello'))
    // fs.unlinkSync('../tmp/hello')
    console.log('成功删除/tmp/hello ');
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
    // fs.rename(
    //     path.resolve(__dirname, '../tmp/hello'),
    //     path.resolve(__dirname, '../tmp/world'),
    //     err => {
    //         if (err) throw err;
    //         fs.stat(path.resolve(__dirname, '../tmp/world'), (err, stats) => {
    //             if (err) throw err;
    //             console.log(`文件属性：${JSON.stringify(stats)}`);
    //         })
    //     });
} catch (error) {
    console.log(error);
}

fs.open(path.resolve(__dirname, './file.txt'), 'r', (err, fd) => {
    if (err) throw err;
    fs.fstat(fd, (err, stat)=>{
        if(err) throw err;
        // console.log('read complete', stat);
        fs.close(fd, err=>{
            if(err) throw err;
        })
    })<>
});
//TODO: 55
fs.watch(path.resolve(__dirname, '../tmp'), {encoding:'buffer'},(eventType,fileName)=>{
    if(fileName){
        console.log(fileName.toString());
        // filexName.forEach(byte =>{
        //     console.log(String.fromCharCode(byte));
        // })
    }
})


console.log(fs);