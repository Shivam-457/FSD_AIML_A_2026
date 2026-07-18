const a=[1,2,3,4,5,6,7,8,9];
const v=a.filter((i)=>(i%2==0));
console.log(v);

const b=v.map((i)=>(i*i));
console.log(b);
const c=b.reduce((i,s)=>s+i);
console.log(c);