const fs = require('fs');
var path = require('path')

const files = []
const theDirectory = 'org-configurations';
fs.readdirSync(theDirectory).forEach((file) => {
    if (file !== 'config.json' && path.extname(file) === ".json") {
        var data = fs.readFileSync(`${theDirectory}/${file}`).toString();
        try {
            var dataJson = JSON.parse(data);
            files.push(dataJson);
        } catch (error) {
            console.log(error)
        }
    }
})

fs.writeFile(`${theDirectory}/config.json`, JSON.stringify(files), function (err) {
    if (err) {
        return console.error(err);
    }
})  