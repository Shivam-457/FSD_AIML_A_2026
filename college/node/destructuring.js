const student={
    name:"Shivam",
    age:24,
    branch:"CSE-AIML",
}
// const Name=student.name;
// const Age=student.age;
// const branch=student.Branch;
const {name:newname,age,branch}=student;
console.log(newname+" "+age+" "+branch);

const num=[11,22,33];
// const a=num[0];
// const b=num[1];
// const c=num[2];
const [a,b,c]=num;
console.log(a,b,c);



const student1={
    name:"Shivam",
    age:24,
    branch:"CSE-AIML",
}
const newstu={
    ...student1,
    sec:"A",
};
console.log(newstu);