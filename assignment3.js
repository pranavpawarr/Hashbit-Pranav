// q1
const states = ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Punjab', 'Kerala', 'Rajasthan', 'Gujarat', 'Bihar'];
const filteredStates = states.filter(state => !['a', 'e', 'i', 'o', 'u'].includes(state[0].toLowerCase()));

// q2
let str = 'I love my India';
let result = str.split(' ').reverse().join(' ');

// q3
let string = 'INDIA';
let arr = string.split('');
arr.splice(3, 0, 'O');
arr.splice(4, 0, 'N');
arr.splice(5, 0, 'E');
let output = arr.join('');

// q4
function countLetters(str) {
    const vowels = str.match(/[aeiou]/gi) || [];
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    return { vowels: vowels.length, consonants: consonants.length };
}

// q5
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

// q6
let inputArr = [1,2,3,9,10,7,5,4,3];
let answer = inputArr.filter(num => num > 5);

// q7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

const result = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((a, b) => a + b) / student.scores.length
}));

// q8
function sumToSingleDigit(num) {
    while (num > 9) {
        num = String(num).split('').reduce((a, b) => Number(a) + Number(b), 0);
    }
    return num;
}

// q9
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

// q10
function reverseString(str) {
    return str.split('').reverse().join('');
}

// q11
function calculateAverage(students) {
    return students.map(student => {
        const subjectValues = Object.values(student);
        const average = subjectValues.reduce((a, b) => a + b) / subjectValues.length;
        return { average: Math.floor(average) };
    });
}
