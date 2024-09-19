const studentName = false;
try {
    if (studentName === false) {
        throw new Error("Student name is not defined");
    }
    console.log("Student name is defined");
}catch (error) {
    console.log(error.message);
}