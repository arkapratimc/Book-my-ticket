const { unlink, copyFile, readdirSync } = require('node:fs');
let { resolve } = require('path');


// console.log(resolve('../bookmyticket_server/movies/static/index.js'));

unlink(resolve('../bookmyticket_server/movies/static/index.js'), err => {
    // console.log("js file deleted");
})


unlink(resolve('../bookmyticket_server/movies/static/style.css'), err => {
    // console.log("css file deleted");
})


let files = readdirSync("./dist/assets/");

files.forEach(file => {
    if (file.endsWith("js")) {
        copyFile(`./dist/assets/${file}`, '../bookmyticket_server/movies/static/index.js', err => {
            if (err) throw err;
            console.log("js done")
        })

        
    } else {
        copyFile(`./dist/assets/${file}`, '../bookmyticket_server/movies/static/style.css', err => {
            if (err) throw err;
            console.log("css done")
        })
    }
})

files.forEach(file => {
    unlink(`./dist/assets/${file}`, (err) => {})
})