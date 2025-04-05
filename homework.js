// quetion1:
const fs = require ('fs');

const content = fs.readFileSync('text.txt' , 'utf8');

const words = content.split(' ');

console.log('the number of words is:' + words.length);




// qustion2:
const xlsx = require ('xlsx');

const workbook = xlsx.readFile('טבלת ציונים.xlsx');

const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const data = xlsx.utils.sheet_to_json(sheet);

let sum = 0;

data.forEach(students=>{
    sum += students["ציון"];
})

const avg = sum / data.length;

console.log('The grade point average ', avg);
