//comment
console.log('Namaste duniya');
let a=5;
console.log(a);
var b=true;
console.log(b);
var b=false;
console.log(b);
const s=99;
console.log(s);
let s1='shivam';
console.log(s1);
s1=true;
console.log(s1);

let person={
    firstName:'love',
    age:24,
};
console.log(person.age);
console.log(person['firstName']);
console.log(person);//key value pair
let arr=[1,2,'shiv',true];
console.log(arr);
console.log(arr[2]);
arr[3]='am';
console.log(arr[2]+arr[3]);

let name=5;
console.log(name);

console.log(12/2);
console.log(2**10);
console.log(5<=3);
let o=99;
console.log(++o);
console.log(o++);
console.log(o);
console.log(--o);
console.log(o--);
console.log(o);

//comparison
console.log(2==3);
let w=1;
let r='1';
console.log(w==r);  //ander ka data compare krta hai
console.log(w===r); //y datatype and value dono compare krta
console.log(w!==0);

//ternanry operator
let age=29;
let status=(age>=18) ? "Can Vote":"Can't Vote";
console.log(status);

console.log(true && false);
console.log(true || false);
console.log(false||9);
console.log(false||'shivam');
console.log('true'||'shivam');
console.log(false ||5 ||8);
console.log('shivam'||true); //jon s value true mil gye left to right m sidha vo return ya print kar deta hai
console.log('shivam' && true);  //last value deta wrna firstly falsy value
console.log('shivam' && true &&  0); //0 is falsey

console.log(2&3);//bitwise and
console.log(2|3);//bitwise or

let no=2;
if(no==1){
    console.log('first');
}
else if(no==2)
{
    console.log('second');
}
else if(no==3)
{
    console.log('third');
}
else
    console.log('thankyou');

//switch

let n='C';
switch(n){
    case 'A':console.log('first');
    break;
    case 'B':console.log('second');
    break;
    case 'C':console.log('third');
    break;
    default:console.log('thank you');
}

//Loops
for(let i=0;i<=10;i++)
{
    console.log('No. is '+ i);
}

let i1=0;
while(i1<=10)
{
    console.log("shivam is "+ i1);
    i1++;
}

let i=1;
do{
    console.log(i);
    i++;
}while(i<=11);





