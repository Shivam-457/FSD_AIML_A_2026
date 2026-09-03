var a=10;
const num=[1,2,3,4,5];
// const b=num[0];
// const c=num[1];
const [b,c]=num; //destructuring of an array
console.log("b= "+b);
console.log("c= "+c);

const student={
    name:'Ashish',
    age: 40,
    branch: 'AIML',
};
// const name=student.name;
// const age=student.age;
// const branch=student.branch;

//Object destructuring
const {name,age,branch}=student;
console.log("Name = "+ name+"\n"+"Age = "+age+"\n"+"Branch = "+branch);

