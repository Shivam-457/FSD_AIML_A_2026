console.log('hello');
const rectangle={
    length:1,
    breadth:2,

    //behaivour
    draw:function(){
        console.log('drawing a rectangle');
    }
};
console.log(rectangle);

//jab object k ander function hota to use method
console.log(rectangle.draw);
console.log(rectangle.draw());
console.log(rectangle.length);
console.log(rectangle.breadth);

//Factory function 
// function createRectangle() {
//     let rectangle={
//         length:1,
//         breadth:1,
//         draw:function(){
//             console.log('Hello');
//         }
//     };
//     return rectangle;
// }
// console.log(createRectangle());

//or
function createRectangle(){
    return rectangle1={
        length:1,
        breadth:1,
        draw(){
            console.log('Hello');
        }
    };
}
let rectangleObj1=createRectangle();
console.log(rectangleObj1.length);
console.log(rectangleObj1.draw());

//parameter functrion factory
function createRectangle1(len,brea){
    return rectangle2={
        length:len,
        breadth:brea,
        draw(){
            console.log('Hi How are you?');
        }

    };
}
let rectangleObj2=createRectangle1(5,8);
console.log(rectangleObj2.length);
rectangleObj2.draw();

//Constructor Function
//this current object ko point krta hai jis object pr hum kam kr rhe hai us ko point krta hai
// Constructor function me 'this' us naye object ko point karta hai jo 'new' keyword se create hua hai.
// 'this' us object ko refer karta hai jis context me function execute ho raha hota hai.
function Rectanglenew() {
    this.length=1,
    this.breadth=4,
    this.draw=function(){
        console.log('Hello ji kya hal chal?');
    }
}
let obj1=new Rectanglenew();
console.log(obj1.length);
console.log(obj1.breadth);
obj1.draw();

//new keyword js m empty object bnata hai

function Rectanglenew1(len,bre) {
    this.length=len,
    this.breadth=bre,
    this.draw=function(){
        console.log('Hello ji kya hal chal sbke?');
    }
}
let obj2=new Rectanglenew1(4,3);
console.log(obj1.length);
console.log(obj2.breadth);
obj2.draw();

//dynamic nature of objects mtlb ham koi bhi prop add ya remove kr skte hai see
//add
rectangleObj2.color='yellow';
console.log(rectangleObj2);

obj2.color='red';
console.log(obj2);

//del
delete rectangleObj2.color;
console.log(rectangleObj2);
delete obj2.color;
console.log(obj2);


//Constructor Property
let objName=new Rectanglenew1(4,5);
console.log(objName.constructor);

// objName ka constructor hai Rectanglenew1

//ab Rectanglenew1 ka constructor kn hai?
console.log(Rectanglenew.constructor);

let Rect=new Function(
    'length','breadth',
    `this.length=length,
    this.breadth=breadth,
    this.draw=function(){
        console.log('Hello ji kya hal chal sbke?');
    }`);
let Rectnew1=new Rect(2,3);
console.log(Rectnew1);


//functions are objects
Rectanglenew.bind;
Rectanglenew.length
//y fucnction hai and hum iske prop and methods/functions ko access kr pa rhe hai to y object bhi hua

//primitive vs refernce

//primitive
let a=10;
let b=a;
a++;
console.log(a);
console.log(b);

//isme copy bnte hai dono k alag alag to a change hua to a hi change hua b nhi change hoga kyuki uske alag copy bne hai

//refernce
let a1={value:10};
let b1=a1;
a1.value++;
console.log(a1.value);
console.log(b1.value);

//refernce k case m addresses pass hote hai to jab b1=a1 kra to dono same address ko point krte agr ek k value bdle to dusre k value bhi badlege
//isme copy nhi bnte balki address s kam hota hai
let c=10;
let d={value:10};
function inc(d){
    d.value++;
}
inc(c);
inc(d);
console.log(c);
console.log(d.value);

//for-in and for-of loop

//for in sirf objects ko iterate k liye use
let rectan={
    length:2,
    breadth:4,
};
for(let key in rectan)
{
    //console.log(key); //keys print
    //console.log(rectan[key])//values print
    //key value pair
    console.log(key,rectangle[key]);
}

//for of arrays map pr lgta hai
//agr object par lgana ho jabardasti to aese lgega
for(let key of Object.keys(rectan))
{
    console.log(key); //keys print
    console.log(rectan[key]); // values
}
//agr key value pair k sath chaiye
for(let key of Object.entries(rectan))
{
    console.log(key);  //key value pair
}

//agr objecct k ander koi prop hai ya nhi dekhna hai to
if('length' in rectan)
{
    console.log('Present');
}
else
    console.log('Absent');

if('color' in rectan)
{
    console.log('Present');
}
else
    console.log('Absent');

//object cloning
//iterative cloning 
let src={
    a:10,
    b:20,
    c:30
};
let dest={};
for(let key in src)
{
    dest[key]=src[key];
}
console.log(dest);
src.a++;
console.log(dest);  //clone in dest as dono a ki value alag alag hai
//Assign cloning
let dest1=Object.assign({},src);
console.log(dest1);

//spread cloning
let dest2={...src}
console.log(dest2)


