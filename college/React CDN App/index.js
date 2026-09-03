const data=[
    {Image:"",price:"435/-"}
    {Image:"",price:"535/-"}
    {Image:"",price:"635/-"}
]
function Book(props){
    const image=React.createElement("img",
        {src:props.Image,
            width:"50px",
            height:"50px"});
const h2=React.createElement("h2",{color:"red"},"Price : "+props.price);
const child=React.createElement("div",{className:"card"},{image,h2});
return child;
}
    React.createElement("div",{className:"booklist"},
        data.map(b)=>{
            Book(b)
        }
    );
const parent=document.getElementById("root");
const root=ReactDOM.ren
ReactDOM.render(booklist);
