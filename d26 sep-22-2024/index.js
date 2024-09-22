const studentInfo = {
    name: 'Tisha Rani',
    age: 20,
    gender: "Female",
    city: 'Narsingdi',
    country: 'Bangladesh',
    about: () => {
        return `Her name is ${studentInfo.name}. She is a student of Computer Science and Engineering. She is ${studentInfo.age} years old. She lives in ${studentInfo.city}, ${studentInfo.country}.`;
    },
    friendList: ['Rakib', 'Rahim', 'Karim'],
    address: {
        village: 'Bhobanipur',
        postOffice: 'Bhobanipur',
        thana: 'Monohardi',
        district: 'Narsingdi'
    }
} 
studentInfo.name = 'Tisha Rani Saha';
studentInfo.result = 'A+';
console.log(studentInfo.name);
console.log(studentInfo.result);
// console.log(studentInfo);
console.log(studentInfo.about());
console.log(studentInfo.friendList[1]);
console.log(studentInfo.address.thana);


 