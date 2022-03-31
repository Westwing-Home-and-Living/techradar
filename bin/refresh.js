const reader = require('g-sheets-api');
const fs = require('fs');
let content = 'const points = [';

//gsheet details
const readerOptions = {
    sheetId: "YOUR_SHEET_ID",
    apiKey: 'YOUR_API_KEY',
    returnAllResults: true
};

// reading files from gsheet
reader(readerOptions, (results, error) => {
    if (error) {
        console.error('Problem retreaving points', error);
    }
    results.forEach(element => {
        content += '{ name: "' + element.name + '", ring: "'+ element.ring +'",quadrant: "' + element.quadrant +'" },\n';
    });
    content += ']';
    fs.writeFile('../points.js', content, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log("points.js written");
    });
});