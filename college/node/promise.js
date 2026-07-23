function register()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("register here");
    },6000);
        })
}
function login()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("login here");
    },6000);
        })
}
function getData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("fetch data here");
    },6000);
        })
}
function displayData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("display data here");
    },6000);
        })
}
//order diya hai hmne
// register().then(login)
//             .then(getData)
//             .then(displayData)
//             .catch((err)=>{
//                 console.log("Error "+err);
//             })

//alternate for then 
async function test(){
    try{
        await register();
        await login();
        await getData();  //await lga k call and us function ko async kr do
        await displayData();    
    }
    catch(err){
        console.log("Error +",err);
    }
};
test();
console.log("call another app");
