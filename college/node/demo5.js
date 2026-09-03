const student={
    name:'shivam',
    age:20,
    branch:'AIML',
};
const newStudent={...student,
    address:
{
    street1:'sector-62',
    city:'noida',
    state:'U.P.',
    pincode:201009,
}
}
console.log("Student = ",student);
console.log("Student =",newStudent);
