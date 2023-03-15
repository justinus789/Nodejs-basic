const fs = require('fs')
const path = require('path')

const readFileSystemCallback = (err, data) => {
    if(err){
        console.log('Gagal membaca berkas dikarenakan error : ' + err)
        return
    }

    console.log(data)
}

fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', readFileSystemCallback)