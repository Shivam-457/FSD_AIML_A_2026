function register(cb)
{
    setTimeout(()=>{
        console.log("register here");
        cb();
    },6000);
}
function login(cb)
{
    setTimeout(()=>{
        console.log("login here");
        cb();
    },8000);
}
function getData(cb)
{
    setTimeout(()=>{
        console.log("fetch the data");
        cb();
    },4000);
}
function displayData()
{
    setTimeout(()=>{
        console.log("display the data");
    },1000);
}

//it creates problem of call back hell in large problems
register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
        })
    })
});
console.log("call another app");
