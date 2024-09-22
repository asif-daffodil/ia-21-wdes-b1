const students = [
    {
        name: 'Tisha Rani',
        city: 'Narsingdi',
    },
    {
        name: 'Kamal',
        city: 'Dhaka',
    },
    {
        name: 'Sifat',
        city: 'Chattogram',
    },
    {
        name: 'Kabba',
        city: 'Bhrammonbaria',
    }
]; 

students.map(student => {
    console.log(`Name: ${student.name}\nCity: ${student.city}\n`);
});

// stringified JSON
const studentJSON = JSON.stringify(students);
console.log(studentJSON);

// parsed JSON
const studentObj = JSON.parse(studentJSON);

fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => console.log(data));