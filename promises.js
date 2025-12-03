var fs = require("fs")
var fsPromise = require("fs/promises")

fs.readFile("filename", function (data, err) {
    fs.readFile("filename2", function (data2, err2) {
        fs.readFile("filename3", function (data3, err3) {

        })
    })
})

fsPromise.readFile("filename")
    .then(function (data) {
        return fsPromise.readFile("filename2")
    })
    .then(function (data2) {
        return fsPromise.readFile("filename3")
    })
    .then(function (data3) {

    })

// var promise = fsPromise.readFile("server.js")
// console.log("promise:", promise)