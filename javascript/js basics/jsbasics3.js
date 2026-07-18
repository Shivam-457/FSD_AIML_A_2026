//Inbutilt  objects

//Math
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.PI);
console.log(Math.round(1.8));
console.log(Math.round(1.2));
console.log(Math.round(1.5));
console.log(Math.max(2,3,1,7,10));
console.log(Math.min(1,3,0.5,33,11));
console.log(Math.abs(-2));
console.log(Math.abs(2));


//String
//2 type ki hoti hai primitive and object wale
let str='shivam';
let str2=new String('Gambhir');
let str3=new String('Shivam gam');
console.log(str2);
console.log(str3);
console.log(typeof(str3));
console.log(typeof(str2));
console.log(typeof(str));

console.log(str.length);
console.log(str[0]);
console.log(str[4]);
console.log(str.includes('v'));
console.log(str.indexOf('v'));
console.log(str.includes('vam'));
console.log(str.includes('ma'));
console.log(str.startsWith('shi'));
console.log(str.startsWith('shib'));
console.log(str.endsWith('shi'));
console.log(str.endsWith('am'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Last and strating m extra spaces ko remove krna to
s='  shivam ji    '
console.log(s);
console.log(s.trim());

console.log(str.replace('vam',' jai shiv'));
//split
let s1='This is my First Message';
let words=s1.split(' ');
console.log(words);

//agr hme code m ' '' '" " aese symbols dikhane to direct string m nhi aaege to use/'
let h='Hello kyse ho ji shivam\'s ji'
console.log(h);

//Template literal  multiple line m print krta hai  $ use hota kisi dusrre string ko sath m lane k liye uske sath hi
let message=`Hello ${str} this 
is shivam's 
from this side`
console.log(message);


//date and time
let date=new Date();
console.log(date);

let date1=new Date(' 3 July 2006 02:45');
console.log(date1);

let date2=new Date('2006 6 3  02:47');
console.log(date2);

//month k index 0 se start hote 0=january

//getter/setter
date2.setFullYear(2005);
console.log(date2);
date1.setHours(1);
console.log(date1);

console.log(date2.getDate());
console.log(date.getHours());
console.log(date.getTime());



//ARRAY
let numbers=[1,3,5,7];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers[0]);

//element add in an array 
//End m
numbers.push(9);
console.log(numbers);

//Starting m
numbers.unshift(0);
console.log(numbers);

//middle m
numbers.splice(2,0,'a','b','c','d');
console.log(numbers);

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(99));

//we want to check if a number is present in an array or not
if(numbers.indexOf(7)!=-1)
    console.log('Present');
else
    console.log('absent');

//Another method
console.log(numbers.includes(7));
console.log(numbers.includes('e'));

console.log(numbers.indexOf(4,2));

//Object k sath

let courses=[
    {no:1,name:'rahul'},
    {no:2,name:'shivam'}
];
console.log(courses);

//objects m search krne k liye callback function use krte hai
let course=courses.find(function(course)
{
    return course.name=='shivam';
})
console.log(course);

//Code short krdo using arrow notation
//agr single statement to {} remove and return bhi remove and function keyword bhi remove
let course1=courses.find(course=>course.name=='rahul');
console.log(course1);


//Remove elements in an array
let nums=[1,2,3,33,2,11,43,5];
console.log(nums);
//End remove
nums.pop();
console.log(nums);

//first remove
nums.shift();
console.log(nums);

//middle se
nums.splice(3,1);
console.log(nums);

nums.splice(3,4); //3rd index s 4 element delete
console.log(nums);


//Array ko empty krna hai
let numb=[1,2,3,4,5,5,6,6,6,9];
let numl=numb;
numb=[];
console.log(numb);
console.log(numl);
//isse numb=[] to numb empty hogya pr numl nhi hua 

numb=[1,2,3,4,5,5,6,6,6,9];
numl=numb;
//or use
numb.length=0;
console.log(numb);
console.log(numl);

//isse dono empty hogye
numb=[1,2,3,4,5,5,6,6,6,9];
numl=numb;
console.log(numb);
console.log(numl);
numb.splice(0,numb.length);
console.log(numb);
console.log(numl);

//or while loop lga while(nums.length>0) nums.pop() bhi use kr skte


//Combining and slicing
let first=[1,2,3,4];
let second=[5,6,7,8];
let concat=first.concat(second);
console.log(concat);
console.log(concat.slice(2,4));
console.log(concat.slice(4));
console.log(concat.slice());

//using spread operator combine kre to
let combined=[...first,...second];
console.log(combined);

let combinednew=[...second,...first,true,'a',0,'shivam'];
console.log(combinednew);

//spread operator s copy bhi bna skte array ki hum
let copy=[...concat];
console.log(copy);

//Iterating on an array
//Method-1
let arr=[1,2,3,4,5,6];
for(let value of arr)
{
    console.log(value);
}
console.log('\n');

//Method-2 Using for each
arr.forEach(function(numbers){
    console.log(numbers);
})
console.log('\n');
//Using arrow function
arr.forEach(numbers=>console.log(numbers));

//Joining Arrays
let numbe=[1,2,3];
let joined=numbe.join(',');
console.log(joined);

//split krna to
let mess="hello shivam from this side";
let parts=mess.split(' ');
console.log(parts);
console.log(mess.split());
console.log(parts.join('_'));




