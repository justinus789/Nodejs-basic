const fs = require('fs')
const path = require('path')

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
})

const writeableStream = fs.createWriteStream('./stream/output.txt')

readableStream.on('readable', () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`)
    } catch (error) {
       
    }
})

readableStream.on('end', () => {
    writeableStream.end(null)
})