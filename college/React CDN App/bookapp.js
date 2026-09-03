const bookdata=[
    {image:"https://tse2.mm.bing.net/th/id/OIP.WyPGTyB7Z1s3KTmJ6Kr6EwHaLG?r=0&pid=Api&P=0&h=180",price: 345},
    {image:"https://tse3.mm.bing.net/th/id/OIP.BR6NLuGdR6fhVui4olGZugHaJI?r=0&pid=Api&P=0&h=180",price: 545},
    {image:"https://tse3.mm.bing.net/th/id/OIP.BR6NLuGdR6fhVui4olGZugHaJI?r=0&pid=Api&P=0&h=180",price: 679},
]
function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const h2=React.createElement("h2",{},"Price:"+props.price);
    const bt=React.createElement("button",{},"AddToCart");
    const div=React.createElement("div",{className: "root"},[image,h2,bt]);
    return div;
}
const bookstore=bookdata.map((b)=>(
    Book(b)
))
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
        root.render(bookstore)