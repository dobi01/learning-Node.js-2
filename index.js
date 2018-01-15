var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano plik!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

fs.readdir('../task-13.7', function(err, data) {
    let text = '';

    for(let i of data) {
      text += i + '\n';
    }

    fs.writeFile('log.txt', text, (err) => {
      if (err) throw err;
      console.log('Zapisano katalog!');
    });
});
