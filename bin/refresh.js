const reader = require('g-sheets-api');
const fs = require('fs');
let content = 'const points = [';

//gsheet details
const readerOptions = {
    sheetId: "1qxqDFvSeZvmaHd5MNnJ-JiDcmUTXilXjCm9xfJe03EM",
    apiKey: process.argv[2],
    returnAllResults: true
};

// reading files from gsheet
reader(readerOptions, (results, error) => {
    if (error) {
        console.error('Problem retreaving points', error);
        return;
    }
    results.forEach(element => {
        element.moved = (!element.moved) ? 0 : element.moved; 
        content += '{ name: "' + element.name + '", ring: "' + element.ring + '", quadrant: "' + element.quadrant + '", moved: ' + element.moved + ' },\n';
    });
    content += ']';
    fs.writeFile('../points.js', content, err => {
        if (err) {
            console.error(err)
            return;
        }
        console.log("points.js written");
    });
});